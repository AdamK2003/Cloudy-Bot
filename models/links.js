const mongoose = require('mongoose')

const LinkSchema = mongoose.Schema({
    _id: String,
    userID: String,
    fc: String,
    type: String,
   });

module.exports = mongoose.model("Link", LinkSchema);
