const mongoose = require('mongoose');





mongoose.connect(process.env.MANGO);

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
