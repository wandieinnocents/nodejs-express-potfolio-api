## Node + Express Portfolio api


## Materials
- 

## MongoDB
- start: brew services start mongodb-community@8.0
- stop: brew services stop mongodb-community@8.0
- check if monog running : brew services list

## Setup
- npm init
- install express
- install mongodb
- npm install --save-dev nodemon @babel/core @babel/cli @babel/node @babel/preset-env
- npm install nodemon body-parser
- create babelrc file
- modify scripts to use nodemon, to run the code
 "scripts": {
    "start": "nodemon ./index.js --exec babel-node"
  },

- 