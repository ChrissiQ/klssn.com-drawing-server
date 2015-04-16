#!/usr/bin/env node

import io from'socket.io';
import mongoose from 'mongoose';
import { development as config } from './config';
 
io(3030).on('connection', socket => {
  socket.on('message', msg => console.log(`Message: ${msg}`));
  socket.on('disconnect', () => { });
});

// Connect to mongodb
mongoose.connect(config.db);
const db = mongoose.connection;