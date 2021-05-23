const mongoose = require('mongoose')

const nAfkSchema = mongoose.Schema({
    username: String,
    userID: String,
    afkReason: String,
    guildID: String,
    time: String
});

module.exports = mongoose.model("Afk", nAfkSchema);
