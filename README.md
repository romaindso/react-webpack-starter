# React Webpack Starter
Setup a React app with Webpack using the ES6 syntax and ESLint for code quality.

## Installation
Clone this project, then run in your console :
``` javascript
$ npm install
```


## Run
``` javascript
$ npm start
```
By default the app is available on [http://localhost:8080](http://localhost:8080)

## Configuration
### Port number
The port number can be change in the `package.json` :
``` json
...
"scripts": {
    "start": "webpack-dev-server --port 8080 --hot --inline --content-base build/"
}
...
```

### ESLint
All rules can be overwrite in the `.eslintrc` file.
