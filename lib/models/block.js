import mongoose from 'mongoose';

const BlockSchema = new mongoose.Schema({
  x: {type : Number},
  y: {type : Number},
  h: {type : Number},
  createdAt: {type : Date, default : Date.now}
});

BlockSchema.methods = {

  //save: function()

}

mongoose.model('Block', BlockSchema);