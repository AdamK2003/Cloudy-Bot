const mongoose = require('mongoose')

const db = process.env.DB


mongoose.connect(db)

const Warn = require(process.env.ROOTDIR + '/models/warn.js')


const Discord = require('discord.js')

module.exports.help = {
    name: "warn",
    aliases: ['warn'],
    category: 'warns',
    description: "Warn someone.",
    usage: "<mention> <reason>",
    cooldown: 0,
    args: true
};     

module.exports.run = async (client, message, args) => {
    // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');

    await message.delete()
    if(!message.member.hasPermission(['MANAGE_MESSAGES'], true, true )) {
        return message.channel.send("Nope!");
    }
    if(message.member.roles.highest.position < target.roles.highest.position) {
        return message.channel.send('You do not have a high enough role to warn this member!')
    }
    let rUser = message.mentions.members.first();
    if(!rUser) return message.reply("Invalid user!")
    let rReason = args.slice(1).join(" ")
    if(!rReason) return message.reply("Please supply a reason.")

    const report = new Warn({
        _id: mongoose.Types.ObjectId(),
        username: rUser.user.tag,
        userID: rUser.id,
        reason: rReason,
        reportedBy: message.author.tag,
        reportedByID: message.author.id,
        guildID: message.guild.id,
        time: message.createdAt.toUTCString()
    })

report.save()
.then(result => console.log(result))
.catch(err => console.log(err));

message.reply('Warned ' + rUser.user.tag + '! Reason: '+rReason)

}
