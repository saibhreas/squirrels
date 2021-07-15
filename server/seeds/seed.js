const path = require('path');
const mongoose = require('mongoose');
const db = require('../config/connection');

const PineappleSeeds = require('./Pineapple.json');

const { Pineapple } = require('../models');


db.once('open', async () => {
  try {
    //Delete if Exists 
    await Pineapple.deleteMany({});
   
    //Create squirrels
    await Pineapple.create(PineapplerSeeds);
       
    //Add Id to all seeds
    //Users get ID
    for (let i = 0; i < PineappleSeeds.length; i++) {
      const { _id, name } = await Pineapple.create(PineappleSeeds[i]);
      const pineapple = await Pineapple.findOneAndUpdate(
        { username: name },
        {
          $addToSet: {
            // TODO ask about endpoint  vs lesson material <Route exact path="/thoughts/:thoughtId">
            pineappleID: _id,
          },
        }
      );
    }

  } catch (err) {
    console.log("Line 96 of Seed  Error during Seed: ",err);
    // process.exit(1);
  }


  console.log('all done!...not Really...This is just a dream');
  process.exit(0);

});