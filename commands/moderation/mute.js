const mongoose = require('mongoose')

const db = process.env.DB


mongoose.connect(db)

const Mute = require(process.env.ROOTDIR + '/models/mutes.js')


const Discord = require('discord.js')

const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {
   // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');

   const user = message.mentions.users.first();
      const target = message.guild.member(user);

      let reason = args.slice(1).join(' ');
      if(!reason) reason = "None";

      let role = message.guild.roles.cache.find(r => r.id === "809078514455543868");

       if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can\'t use that!');
       if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I don\'t have the right permissions.');
       if(!target) return message.channel.send('Can\'t seem to find this user.');
       if(message.member.roles.highest.position < target.roles.highest.position) {
         return message.channel.send('You do not have a high enough role mute this member!')
     }

       const embed = new MessageEmbed()
       .setColor("#ffff00")
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`Mute!`, `${message.author.tag} muted ${user.tag}`)
       .addField(`Reason:`, `${reason}`)
       .setTimestamp()
       
         message.channel.send(embed).then(async m => {
            await client.channels.cache.get("801757379573448723").send(embed);
            target.roles.add(role);
         })
         
         const mutes = new Mute({
            _id: mongoose.Types.ObjectId(),
            username: target.user.tag,
            userID: target.id,
            reason: reason,
            MutedBy: message.author.tag,
            MutedByID: message.author.id,
            guildID: message.guild.id,
            time: message.createdAt.toUTCString() 
        })
        
        mutes.save()
     .then(result => console.log(result))
     .catch(err => console.log(err));
};

module.exports.help = {
   name: "mute",
   aliases: ['mute'],
   category: 'moderation',
   description: "mute a user",
   usage: "(member) (reason)",
   cooldown: 0,
   args: true
};     
