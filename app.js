#!/usr/bin/env node

import io from'socket.io';

io(3030).on('connection', socket => {
  socket.on('message', msg => { console.log(`Message: ${msg}`)});
  socket.on('disconnect', () => { });
});