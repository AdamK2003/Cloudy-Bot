const mongoose = require('mongoose')

const db = process.env.DB


mongoose.connect(db)

const Afk = require(process.env.ROOTDIR + '/models/afk.js')


const Discord = require('discord.js')

module.exports.help = {
    name: "endafk",
    aliases: ['endafk', 'stopafk', 'afkstop'],
    category: 'misc',
    description: "Turn off your afk activity",
    usage: " ",
    cooldown: 0,
    args: false
};     

module.exports.run = async (client, message, args) => {
    // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');

    await message.delete()

    Afk.deleteMany({ userID: message.author.id, guildID: message.guild.id, username: message.author.tag }, (err, res) => {
      if(res.ok != 1) return message.reply("An error has occurred!")
      if(res.n == 0) return message.reply("you did not had a afk status set!")
      return message.reply("Successfuly turned off your afk status!").then(async m => {
        await message.member.setNickname(message.author.username);
     })
   })
}
