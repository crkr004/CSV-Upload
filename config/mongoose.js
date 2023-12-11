const mongoose = require('mongoose');





mongoose.connect(process.nv.MANGO);

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
