  
const mongoose = require('mongoose')

const db = process.env.DB

mongoose.connect(db)

// const get = require('get-value')

const FC = require(process.env.ROOTDIR + '/models/fcs.js')

const Discord = require('discord.js')

module.exports.help = {
    name: "fc",
    aliases: ['fc','getfc'],
    category: 'server',
    description: "Check someone's fc",
    usage: "<mention>",
    cooldown: 0,
    args: false
};   

module.exports.run = async (client, message, args) => {
    // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');

    let rUser = message.mentions.members.first() || message.member
    FC.find({userID: rUser.id}, (err, arr) => {
        if(!arr[0]) return message.channel.send(`${rUser.user.tag} doesn't have a friend code set!`)
        message.channel.send(`Friend code of ${rUser}: ` + arr[0].fc);
    })
return
}
