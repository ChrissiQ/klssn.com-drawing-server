#!/usr/bin/env node

import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

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
    //var blocks = []
    if (req.body){
      var Block = mongoose.model('Block');
      Block.create(req.body, () => {
        //console.log("Blocks:", blocks);
        Block.find({}, (err, blocks) => {
          //console.log("Blocks:",JSON.stringify(blocks))
          res.send(blocks);
        });

      });
    }
    //req.body.forEach(function(val){
    //  console.log("Value:",val)
    //  var block = new Block(val)
    //  block.save()
    //  blocks.push(block)
    //})
  });

  server.get('/block/new', (req, res) => {
    // console.log("REQUEST MADE:", req);
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
 
  // server.get('/echo/:name', (req, res, next) => {
  //   res.send(req.params);
  //   return next();
  // });

  // server.get('/', (req, res, next) => {
  //   res.send("Hello");
  //   return next();
  // });

};