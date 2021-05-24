const mongoose = require('mongoose')

const LinkSchema = mongoose.Schema({
       _id: mongoose.Schema.Types.ObjectId,
       userID: String,
       Friend_Code: String,
       Steam: String,
       Ps: String,
       Microsoft_Gamertag: String
   });

module.exports = mongoose.model("Link", LinkSchema);
