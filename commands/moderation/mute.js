const mongoose = require('mongoose')

const db = process.env.DB


mongoose.connect(db)

const Mute = require(process.env.ROOTDIR + '/models/mutes.js')

const ms = require("ms")
const Discord = require('discord.js')

const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {

   const user = message.mentions.users.first();
      const target = message.guild.member(user);

      let muteTime = (args[1] || '1y')

      let role = message.guild.roles.cache.find(r => r.name === "cloudy mute");
      if (!role) {
         role = await message.guild.roles.create({
            data: {
               name: 'muted',
               color: '#595959',
               permissions: []
            }
         });
            //perm
         message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.updateOverwrite(role, {
               SEND_MESSAGE: false,
               ADD_REACTIONS: false,
               CONNECT: false
            });
         });
      }
      
      let reason = args.slice(2).join(' ');
      if(!reason) reason = "None";

       if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can\'t use that!');
       if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I don\'t have the right permissions.');
       if(!target) return message.channel.send('Can\'t seem to find this user.');
       if(message.member.roles.highest.position < target.roles.highest.position) {
         message.channel.send('You do not have a high enough role to mute this member!'); }

       const embed = new MessageEmbed()
       .setColor("#ff8400")
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`**Mute! 🔇**`, `${message.author.tag} muted ${user.tag} for ${ms(ms(muteTime))}.`)
       .addField(`**Reason:**`, `\`${reason}\``)
       .setTimestamp()
       
         await target.roles.add(role);
         message.channel.send(embed);

         setTimeout(() => {
         target.roles.remove(role);

         const embed = new MessageEmbed()
       .setColor("#ff8400")
       .setAuthor(`By console`)
       .addField(`**Unmute! 🔇**`, `I unmuted ${user.tag} because his mute duration ended.`)


       .setTimestamp()

       client.channels.cache.get("846084525636845599").send(embed);

         }, ms(muteTime));
         
         
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
   usage: "(member) (duration) (reason)",
   cooldown: 0,
   args: true
};     
