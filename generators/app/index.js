const Generator = require('yeoman-generator');
const kebabCase = require('lodash.kebabcase');
const chalk = require('chalk');
const sortPackageJson = require('sort-package-json');

module.exports = class extends Generator {
  initializing() {
    this.log(
      `\nWelcome to ${chalk.greenBright("blackxored's")} OSS generator!\n`
    );
    const done = this.async();
    return this.user.github.username((err, username) => {
      this.githubUsername = username;
      done(err);
    });
  }

  prompting() {
    return this.prompt([
      {
        name: 'moduleName',
        message: 'What do you want to name your project?',
        default: this.appname.replace(/\s/g, '-'),
        filter: x => kebabCase(x).toLowerCase(),
      },
      {
        name: 'tagLine',
        message: "What's your project's tagline?",
      },
      {
        name: 'username',
        message: "What's your GitHub username?",
        default: this.githubUsername || 'blackxored',
        store: true,
      },
      {
        name: 'description',
        message: "What's the project's description?",
      },
      {
        name: 'teamEmail',
        message: "What's your team's email for CoC inquiries?",
        default: this.user.git.email(),
        store: true,
      },
      {
        type: 'confirm',
        name: 'umdBuild',
        message: 'Do you want to release a UMD build (for the browser)?',
        default: false,
      }
    ]).then(props => {
      this.props = props;

      this.props.authorName = this.user.git.name();
      this.props.authorEmail = this.user.git.email();
      this.props.author = `${this.props.authorName} ${this.props.authorEmail}`;
      this.props.year = new Date().getFullYear();
    });
  }

  writing() {
    const mv = (from, to) => {
      this.fs.move(this.destinationPath(from), this.destinationPath(to));
    };

    this.fs.copyTpl(
      [`${this.templatePath()}/**`],
      this.destinationPath(),
      this.props
    );

    mv('gitignore', '.gitignore');
    mv('eslintignore', '.eslintignore');
    mv('eslintrc.js', '.eslintrc.js');
    mv('editorconfig', '.editorconfig');
    // TODO: mv('travis.yml', '.travis.yml');

    mv('_package.json', 'package.json');
    // sort package.json and remove whitespace
    const pkgJsonPath = this.destinationPath('package.json');
    this.fs.write(
      pkgJsonPath,
      JSON.stringify(sortPackageJson(this.fs.readJSON(pkgJsonPath)), null, 2)
    );
    mv('all-contributorsrc', '.all-contributorsrc');
    mv('github/ISSUE_TEMPLATE.md', '.github/ISSUE_TEMPLATE.md');
    mv('github/PULL_REQUEST_TEMPLATE.md', '.github/PULL_REQUEST_TEMPLATE.md');
  }

  install() {
    this.spawnCommand('git', ['init']);
    this.yarnInstall();
  }

  end() {
    this.spawnCommand('npm', [
      'run',
      'contributors:add',
      this.props.username,
      'code,doc,infra,test',
    ]);

    this.spawnCommand('flow', ['init']);
  }
};
