const mongoose = require('mongoose')

const CurrencySchema = mongoose.Schema({
            username: String,
            userID: String,
            guildID: String,
            // currency
            coins: String,
            // guns
            gun: String,
            knife: String,
            // hunt loots
            tiger: String,
            parrots: String,
            nothing: String,
            RoyalEagle: String,
            rhinoceros: String,
            giraffe: String,
            earthworms: String,
            snake: String,
            // bonus
            drugs: String,
            crate: String,
            alcool: String,
            //items
            safari_car: String,
            alpha_items: String,
   });

module.exports = mongoose.model("Currency", CurrencySchema);
