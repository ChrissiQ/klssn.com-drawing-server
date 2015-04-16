import path from 'path';
const rootPath = path.resolve(__dirname + '../')

/**
 * Expose config
 */

 export var development = {
  root: rootPath,
  db: 'mongodb://localhost/expresstest',
  session_secret: '1234asdf'
};

export var test = {
  root: rootPath,
  db: 'mongodb://localhost/expresstest',
  session_secret: '1234asdf'
};

export var staging = {
  root: rootPath,
  db: process.env.MONGOHQ_URL,
  session_secret: '1234asdf'
};

export var production = {
  root: rootPath,
  db: process.env.MONGOHQ_URL,
  session_secret: '1234asdf'
};