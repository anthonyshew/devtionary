// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Devtionary",
  tagline: "A dictionary for today's developer.",
  url: "https://devtionary.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "anthonyshew",
  projectName: "devtionary",
  trailingSlash: false,
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/anthonyshew/devtionary",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/anthonyshew/devtionary",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/meta-image.png',
      navbar: {
        title: "Devtionary",
        logo: {
          alt: 'Devtionary',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark_mode.svg',
          href: 'https://devtionary.app/',
          target: '_self',
        },
        items: [
          {
            to: "/docs/what-is-devtionary",
            position: "left",
            label: "What is Devtionary?",
          },
          {
            to: "https://github.com/anthonyshew/devtionary/issues/new?assignees=&labels=Good+First+Issue%2C+New+Word&template=new-word-request-template.md&title=New+Word%3A+%5BNEW+WORD+HERE%5D",
            position: "left",
            label: "Request a New Word",
          },
          {
            to: "/docs/how-to-contribute/",
            position: "left",
            label: "How to Contribute",
          },
          {
            type: "dropdown",
            label: "Languages",
            position: "right",
            items: [
              {
                label: "JavaScript",
                to: "/docs/javascript/intro",
              },
              {
                label: "Clojure",
                to: "/docs/clojure/intro",
              },
              {
                label: "C#",
                to: "/docs/csharp/intro",
              },
            ],
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "What is Devtionary?",
                to: "/docs/what-is-devtionary",
              },
              {
                label: "Request a new Word",
                to: "https://github.com/anthonyshew/devtionary/issues/new?assignees=&labels=Good+First+Issue%2C+New+Word&template=new-word-request-template.md&title=New+Word%3A+%5BNEW+WORD+HERE%5D",
              },
              {
                label: "How to Contribute",
                to: "/docs/how-to-contribute",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/H3Wg32fxdV",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/DevtionaryApp",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/anthonyshew/devtionary",
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;