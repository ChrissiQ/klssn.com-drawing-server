#!/usr/bin/env node

export default function routes(server) {
 
  server.get('/echo/:name', (req, res, next) => {
    res.send(req.params);
    return next();
  });

  server.get('/', (req, res, next) => {
    res.send("Hello");
    return next();
  });

};