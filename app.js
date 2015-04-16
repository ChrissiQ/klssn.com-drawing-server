#!/usr/bin/env node

import socketio from'socket.io';
import mongoose from 'mongoose';
import { development as config } from './config';
import server from './lib/server';

mongoose.connect(config.db);
const db = mongoose.connection;

db.on('error', err => console.error(`Connection error: ${err}`));
db.on('disconnected', () => mongoose.connect(config.db));
db.on('open', () => {

  let BlockSchema = new mongoose.Schema({
    x: {type : Number},
    y: {type : Number},
    h: {type : Number},
    createdAt: {type : Date, default : Date.now}
  });

  mongoose.model('Block', BlockSchema);

  let Block = mongoose.model('Block');
  var io = socketio.listen(server.server);

  io.on('connection', socket => {
    socket.on('newBlock', data => {

      Block.findOne( { x:data.x, y:data.y }, (err,block) => {

        let emitNewBlock = (err,block) => io.sockets.emit('newBlock', block);

        if (!block)
          Block.create(data, emitNewBlock);
        else {
          delete data._id;
          Block.findByIdAndUpdate(block._id, data, emitNewBlock);
        }

      });
    });
  });
});