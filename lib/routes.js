#!/usr/bin/env node

import mongoose from 'mongoose';

let ObjectId = mongoose.Types.ObjectId;

export default function routes(server) {

  server.get('/blocks', (req, res) => {
    var Block = mongoose.model('Block');
    Block.count({}, function(err, count){
      console.log("There are " + count + " blocks.");
    })
    Block.find({}, function(err, blocks){
      res.send(blocks);
    })
  });

  server.put('/blocks', (req, res) => {
    if (req.body){
      var Block = mongoose.model('Block');
      Block.create(req.body, () => {
        Block.find({}, (err, blocks) => {
          res.send(blocks);
        });

      });
    }
  });

  server.get('/block/new', (req, res) => {
    var Block = mongoose.model('Block');
    var block = new Block({'x' : 0, 'y' : 0, 'h' : 0});
    block.save();
    res.send('');
    console.log(block);
  });

  server.get('/block/:id', (req, res) => {
    console.log("Params:",req.params)
    var id = req.params.id;
    var Block = mongoose.model('Block');
    var block = Block.find({id: ObjectId(id)});
    res.send(block);
  });

  return server;

};