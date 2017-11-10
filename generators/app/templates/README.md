# <%= moduleName %>

> <%= tagLine %>

[![Semantically Released][semantic-release-badge]][semantic-release]
[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![Styled with Prettier][prettier-badge]][prettier]
[![AirBnB style guide][airbnb-style-badge]][airbnb-style]

[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

<%= description %>

## Installing / Getting Started

These instructions will get you a copy of the project up and running on your 
local machine for development and testing purposes. 

A quick introduction of the minimal setup you need to get a hello world up & running.

```shell
commands here
```

Here you should say what actually happens when you execute the code above.

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```shell
Give examples
```

### Installing

```shell
Give examples
```

## Developing

### Built With

List libraries, frameworks, including versions.

### Pre-requisites

### Setting up Dev

Here's a brief intro about what a developer must do in order to start 
developing the project further:

```shell
git clone https://github.com/<%= username %><%= moduleName %>
cd <%= moduleName %>
yarn
```

And state what happens step-by-step. If there is any virtual environment, 
local server or database feeder needed, explain here.

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here. for example:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets
executed.

## Deploying / Publishing

Add additional notes on how to deploy or publish this package.

## Versioning

We use [SemVer][semver] for versioning. In addition, it's automatic via
[semantic-release][semantic-release], and our [commit convention][commit-convention].

For the versions available, see the [Releases][releases] on this repository.

## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Tests

```shell
yarn test
```

## Style guide

We base our code style on [AirBnB's style guide][airbnb-style] and we check with 
[ESLint][eslint] and automatically format our code with [Prettier][prettier].

## Api Reference

If the api is external, link to api documentation. If not describe your api 
including authentication methods as well as explaining all the endpoints with 
their required parameters. Pointing to live documentation (such as GraphiQL
URL if you're using GraphQL) it's more than helpful.

## License

This project is licensed under the MIT License - see the 
[license] file for details.

## Acknowledgments 

* Hat tip to anyone who's code was used
* Inspiration
* etc

## Contributing

If you're interested in contributing to this project in any form, please read
our [Contribution Guidelines][contributing].

### Code of Conduct

We've adopted a Code of Conduct that we expect project participants to adhere to.
Please read the [full text][coc] so that you can understand what actions 
will and will not be tolerated.

### Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!


[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/<%= username %>/<%= moduleName %>.svg?style=flat-square
[build]: https://travis-ci.org/<%= username %>/<%= moduleName %>
[coverage-badge]: https://img.shields.io/codecov/c/github/<%= username %>/<%= moduleName %>.svg?style=flat-square
[coverage]: https://codecov.io/github/<%= username %>/<%= moduleName %>
[version-badge]: https://img.shields.io/npm/v/<%= moduleName %>.svg?style=flat-square
[package]: https://www.npmjs.com/package/<%= moduleName %>
[downloads-badge]: https://img.shields.io/npm/dm/<%= moduleName %>.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/<%= moduleName %>
[license-badge]: https://img.shields.io/npm/l/<%= moduleName %>.svg?style=flat-square
[license]: https://github.com/<%= username %>/<%= moduleName %>/blob/master/LICENSE.md
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
[contributing]: https://github.com/<%= username %>/<%= moduleName %>/blob/master/CONTRIBUTING.md
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/<%= username %>/<%= moduleName %>/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/<%= username %>/<%= moduleName %>.svg?style=social
[github-watch]: https://github.com/<%= username %>/<%= moduleName %>/watchers
[github-star-badge]: https://img.shields.io/github/stars/<%= username %>/<%= moduleName %>.svg?style=social
[github-star]: https://github.com/<%= username %>/<%= moduleName %>/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20<%= moduleName %>%20by%20%40<%= username %>%20https%3A%2F%2Fgithub.com%2F<%= username %>%2F<%= moduleName %>%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/<%= username %>/<%= moduleName %>.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-c
[semver]: http://semver.org/
[releases]: https://github.com/<%= username %>/<%= moduleName %>/releases
[commit-convention]: https://www.npmjs.com/package/@commitlint/config-angular

