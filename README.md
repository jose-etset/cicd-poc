# Teams Platform
This is the repository for the teams software platform by UncommonGood. The project's codebase was started by a different team outside UG.

Always leave the campground cleaner than you found it.
## Tech requirements
- NVM (node version manager)
- Code Editor (preferably VS Code)
- Git
- Yarn package manager

## Project setup
```
$ yarn install --frozen-lockfile (to install the dependencies using the exact version from the lockfile)
```

## How to run the project
```
$ nvm use (to set the correct node version specified in .nvmrc)
$ yarn serve (to run the project)
```
### Lints and fixes files
```
$ yarn lint
```

### Execute unit tests
```
$ yarn test:unit
```
### Execute e2e tests
```
$ yarn cypress
```
# General guidelines

### Do help remove eslint warnings
This project was started without eslint/prettier linting so the projects contains multiple non-community standard ways of doing things, so if you find a warning on the code you're working, fix it.

### Do help translate foreign comments to english
If you find a comment or a variable name written in a foreign language, help translate it. Only English will be used for the moment.

###