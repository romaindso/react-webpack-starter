# React Webpack Starter
Setup a React app with Webpack using the ES6 syntax and ESLint for code quality.

## Installation
Clone this project, then run in your console :
```bash
$ npm install
```


## Launch
```bash
$ npm start
```
By default the app is available on [http://localhost:8080](http://localhost:8080)

## Configuration
### Port number
The port number can be change in the `package.json` :
```bash
"scripts": {
    "start": "webpack-dev-server --port 8080 --hot --inline --content-base build/"
}
```

## Test
Execute test by running the following command :
```bash
$ npm test
```
By default, tests are executed on *Chrome*, *Firefox* and *Internet Explorer*. Use the `browsers` configuration option in the `karma.conf.test.js` file to override this behavior.

Process coverage report :
```bash
$ npm run coverage
```
Coverage report is available in the `test\coverage` folder.

### ESLint
All rules can be overwrite in the `.eslintrc` file.
