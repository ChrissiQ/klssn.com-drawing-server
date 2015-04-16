#!/usr/bin/env node

import restify from 'restify';
import routes from './routes';

let server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

routes(server);

server.listen(3030);

export default server;