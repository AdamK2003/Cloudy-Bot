const mongoose = require('mongoose')

const db = process.env.DB

mongoose.connect(db)

// const get = require('get-value')

const Currency = require(process.env.ROOTDIR + '/models/currency.js')

const Discord = require('discord.js')

module.exports.help = {
    name: "inventory",
    aliases: ['inventory','inv', 'i'],
    category: 'currency',
    description: "Check your inventory.",
    usage: " ",
    cooldown: 5,
    args: false
};   

module.exports.run = async (client, message, args) => {

    await message.delete()

Currency.find({ userID: User.id, guildID: message.guild.id }, (err, arr) => {
         message.channe.send("**Animals**\nAnimals of " + arr[i].username, "\nTigers: " + arr[i].tiger)

message.channel.send(embed)
})
return
}
