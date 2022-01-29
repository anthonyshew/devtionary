// This script finds every item
// in the docs folder and creates a json file
const fs = require('fs');
const path = require('path');

// IMPORTANT FILE PATHS
const docsPath = path.join('./', 'docs');
const outputFile = path.join('./', 'src', '_languages_.json');
const categoryFileName = '_category_.json';
const defFileType = '.md';

// COLORS
const languageColors = {
  clojure: "#A6E16E",
  javascript: "#FFF3A7",
  csharp: "#D171C8",
  "python": "#F9F9F9",
};

// =========================================================
// CHANGE BEYOND THIS LINE IF YOU KNOW WHAT YOU'RE DOING
// =========================================================

/**
 * Reads given folder and generates Language definitions
 * @param {string} currentPath the path to read for language folders
 */
function readLanguages(currentPath) {
  /** @type Language[] */
  const results = [];

  const children = fs.readdirSync(currentPath);
  children.forEach((childPath) => {
    const newPath = path.join(currentPath, childPath);
    const language = makeLanguage(newPath);
    if (language) {
      results.push(language);
    }
  });

  // sort languages by number of definitions
  results.sort((langA, langB) => langB.defs - langA.defs);
  return results;
}

/**
 * generates a single language from a given folder
 * @param {string} languagePath the file/folder to read
 * @returns {Language}
 */
function makeLanguage(languagePath) {
  const isDirectory = fs.lstatSync(languagePath).isDirectory();
  if (!isDirectory) return;

  // find language info
  const infoPath = path.join(languagePath, categoryFileName);
  const rawPath = languagePath.split(/[\/|\\]/g).slice(-1)[0];

  /** @type {{label: string}} */
  const { label } = JSON.parse(fs.readFileSync(infoPath));

  /** @type {string} */
  const color = languageColors[rawPath];

  return {
    label,
    color,
    path: rawPath,
    defs: countDefs(languagePath)
  };
}

/**
 * Counts the number of definitions in a folder
 * @param {string} dir the folder to count in
 */
function countDefs(dir) {
  let count = 0;
  const children = fs.readdirSync(dir);

  // go through each item
  children.forEach(child => {
    const childPath = path.join(dir, child);
    const isDirectory = fs.lstatSync(childPath).isDirectory();

    // recursively count items in child folder
    if (isDirectory) {
      count += countDefs(childPath);
    } else {
      if (childPath.endsWith(defFileType)) {
        count++;
      }
    }
  });

  return count;
}


console.log('Building language json file...');
const languages = readLanguages(docsPath);
console.log(`Found ${languages.length} language(s).`);
fs.writeFileSync(outputFile, JSON.stringify(languages, null, 2));
console.log('Language json file built successfully.', '\n');

// ==========================================

/**
 * @typedef Language
 * @type {object}
 * @property {string} label - text to show on language tile
 * @property {string} color - color to use on the language tile
 * @property {string} path - filename of the corresponding image
 * @property {number} defs - number of markdown files in the given folder
 */
