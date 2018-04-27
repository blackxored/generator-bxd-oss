# generator-bxd-oss

[![Greenkeeper badge](https://badges.greenkeeper.io/blackxored/generator-bxd-oss.svg)](https://greenkeeper.io/)

> A generator for my open source projects

[![Semantically Released][semantic-release-badge]][semantic-release]
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![Styled with Prettier][prettier-badge]][prettier]
[![AirBnB style guide][airbnb-style-badge]][airbnb-style]

[![MIT License][license-badge]][license]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Installing / Getting Started

### Pre-requisites

This generator assumes you're using [Yarn](https://yarnpkg.com), please install
it first.

Install [yeoman](http://yeoman.io):

```shell
yarn global add yo
```

Then install this generator:

```shell
yarn global generator-bxd-oss
```

Add `semantic-release-cli`:

```shell
yarn global add semantic-release-cli
```

Install [hub](https://github.com/github/hub) (if you want this generator to be able to create repositories for you):

```shell
brew install hub
```

Then switch to the directory where you want to generate a new project, and run:

```shell
yo bxd-oss
```

## Developing

### Built With

* Yeoman

### Pre-requisites

* NodeJS
* Yarn
* Git

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/blackxored/generator-bxd-oss
cd generator-bxd-oss
yarn
```

After this, you can find the generator in `generators/app` alongside its
templates.

### Testing the generator without publishing

```shell
yarn link
```

The above command links this generator into the global modules folder (just
remember to unlink it after!).

## Versioning

We use [SemVer][semver] for versioning. In addition, it's automatic via
[semantic-release][semantic-release], and our [commit convention][commit-convention].

For the versions available, see the [Releases][releases] on this repository.

## Style guide

We base our code style on [AirBnB's style guide][airbnb-style] and we check with
[ESLint][eslint] and automatically format our code with [Prettier][prettier].

## License

This project is licensed under the MIT License - see the [license] file for
details.

## Acknowledgments

* Kent C. Dodds and his
  [generator](https://github.com/kentcdodds/generator-kcd-oss/).
* [Hive's project guidelines](https://github.com/wearehive/project-guidelines)
* [Open Source Guide](https://opensource.guide/)

## Contributing

If you're interested in contributing to this project in any form, please read
our [Contribution Guidelines][contributing].

### Code of Conduct

We've adopted a Code of Conduct that we expect project participants to adhere
to. Please read the [full text][coc] so that you can understand what actions
will and will not be tolerated.

### Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/133308?v=4" width="100px;"/><br /><sub><b>Adrian Perez</b></sub>](https://adrianperez.codes)<br />[💻](https://github.com/blackxored/generator-bxd-oss/commits?author=blackxored "Code") [📖](https://github.com/blackxored/generator-bxd-oss/commits?author=blackxored "Documentation") [🚇](#infra-blackxored "Infrastructure (Hosting, Build-Tools, etc)") [⚠️](https://github.com/blackxored/generator-bxd-oss/commits?author=blackxored "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/blackxored/generator-bxd-oss.svg?style=flat-square
[build]: https://travis-ci.org/blackxored/generator-bxd-oss
[coverage-badge]: https://img.shields.io/codecov/c/github/blackxored/generator-bxd-oss.svg?style=flat-square
[coverage]: https://codecov.io/github/blackxored/generator-bxd-oss
[version-badge]: https://img.shields.io/npm/v/generator-bxd-oss.svg?style=flat-square
[package]: https://www.npmjs.com/package/generator-bxd-oss
[downloads-badge]: https://img.shields.io/npm/dm/generator-bxd-oss.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/generator-bxd-oss
[license-badge]: https://img.shields.io/npm/l/generator-bxd-oss.svg?style=flat-square
[license]: https://github.com/blackxored/generator-bxd-oss/blob/master/LICENSE.md
[semantic-release]: https://github.com/semantic-release/semantic-release
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[commitizen]: http://commitizen.github.io/cz-cli/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
[airbnb-style-badge]: https://img.shields.io/badge/code%20style-airbnb-green.svg?style=flat-square
[airbnb-style]: https://github.com/airbnb/javascript
[eslint]: http://eslint.org
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[contributing]: https://github.com/blackxored/generator-bxd-oss/blob/master/CONTRIBUTING.md
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/blackxored/generator-bxd-oss/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/blackxored/generator-bxd-oss.svg?style=social
[github-watch]: https://github.com/blackxored/generator-bxd-oss/watchers
[github-star-badge]: https://img.shields.io/github/stars/blackxored/generator-bxd-oss.svg?style=social
[github-star]: https://github.com/blackxored/generator-bxd-oss/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20generator-bxd-oss%20by%20%40blackxored%20https%3A%2F%2Fgithub.com%2Fblackxored%2Fgenerator-bxd-oss%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/blackxored/generator-bxd-oss.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[semver]: http://semver.org/
[releases]: https://github.com/blackxored/generator-bxd-oss/releases
[commit-convention]: https://www.npmjs.com/package/@commitlint/config-conventional
