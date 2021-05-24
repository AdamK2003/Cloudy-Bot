const mongoose = require('mongoose')

const db = process.env.DB


mongoose.connect(db)

const Warn = require(process.env.ROOTDIR + '/models/warn.js')

const { MessageEmbed } = require("discord.js");

const Discord = require('discord.js')

module.exports.help = {
    name: "warn",
    aliases: ['warn'],
    category: 'Moderaion',
    description: "Warn someone.",
    usage: "<mention> <reason>",
    cooldown: 0,
    args: true
};     

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    const target = message.guild.member(user);
    
    await message.delete()
    if(!message.member.hasPermission(['MANAGE_MESSAGES'], true, true )) {
        return message.channel.send("Nope!");
    }
    if(message.member.roles.highest.position < target.roles.highest.position) {
        message.channel.send('You do not have a high enough role to mute this member!'); }
    if(message.author = target) return message.channel.send("Umm...You can't warn yourself?");

        
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

const embed = new MessageEmbed()
       .setColor("#f5ed00") 
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`**Warn! ⛔**`, `${message.author.tag} warned ${user.tag}!`)
       .addField(`**Reason**:`, `\`${rReason}\``)
       .setTimestamp()

       message.channel.send(embed);
}
