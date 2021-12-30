<!-- Devtionary Logo -->
<p align="center">
    <img src="https://raw.githubusercontent.com/anthonyshew/devtionary/master/static/img/logo_dark_mode.svg#gh-dark-mode-only" width="120" height="120">
    <img src="https://raw.githubusercontent.com/anthonyshew/devtionary/master/static/img/logo.svg#gh-light-mode-only" width="120" height="120">
</p>

# Welcome to the developer's dictionary that you have always needed!

https://devtionary.app

We strive to create a book of programming words that you may not quite know - or just need a refresher on.
The Devtionary is meant to be accessible and useful for any level of developer - from absolute beginner to 30 year veteran.

## Contributing

### Are we missing a new word?

To request a word, use the [Github issue template](/.github/ISSUE_TEMPLATE/new-word-request-template.md).

## Want to contribute a new word or other pull request?

See the Local Development section [Local Development Section](#local-development).

### For new words...

Take a look at [the new word template](/docs/example.md.example) to add a new word!

## Local Development

Devtionary is built using [Docusaurus](https://docusaurus.io/), a React.js documentation framework.

To run Devtionary locally on your machine:

```
yarn install
yarn start
```

Or:

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

*Please note that the number of definitions shown in the local environment will not change until you run `npm run start` again. If you add another definition to a language, the home page won't reflect that new number until you restart.*

## Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Testing

We may or may not add testing based on how robust this project becomes. While some tests may be helpful, they may be mostly written to help people get familiar with testing.

## Reporting Bugs and Issues

Please open an [issue for us here on Github](/../../issues/). Thank you!

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
