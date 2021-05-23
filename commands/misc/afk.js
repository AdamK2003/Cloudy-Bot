const mongoose = require('mongoose')

const db = process.env.DB


mongoose.connect(db)

const Afk = require(process.env.ROOTDIR + '/models/afk.js')


const Discord = require('discord.js')

module.exports.help = {
    name: "afk",
    aliases: ['afk', 'setafk', 'afkset'],
    category: 'misc',
    description: "Set your activity to afk",
    usage: " ",
    cooldown: 0,
    args: false
};     

module.exports.run = async (client, message, args) => {
    // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');

    await message.delete()

    let afkReason = args.slice(0).join(" ")
    if(!afkReason){ afkReason = "No reason provided" }

    const nAfk = new Afk({
        username: message.author.tag,
        userID: message.author.id,
        afkReason: afkReason,
        guildID: message.guild.id,
        time: message.createdAt.toUTCString()
    })

nAfk.save()
.then(result => console.log(result))
.catch(err => console.log(err));

message.reply(`is now afk: **${afkReason}.**`)
message.member.setNickname("[AFK] " + message.author.username);

}
