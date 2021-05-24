const mongoose = require('mongoose')

const KicksSchema = mongoose.Schema({
            _id: mongoose.Schema.Types.ObjectId,
            username: String,
            userID: String,
            reason: String,
            KickedBy: String,
            KickedByID: String,
            guildID: String,
            time: String
   });

module.exports = mongoose.model("Kicks", KicksSchema);
