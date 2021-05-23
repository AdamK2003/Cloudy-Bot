const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {
   // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');

         const user_mention = message.mentions.users.first();

         if (!args.length) {

            const embed = new MessageEmbed()
            .setColor("#ffff00")
            .addField(`Account Created the:`, ` ${message.author.createdAt}`)
            //.addField(`Joined the server the: `, message.author.joinedAt.format('dddd, MMMM Do YYYY, HH:mm:ss'))
            //.addField(`User roles: `, message.author.roles.map(r => `${r}`).join(' | '))
            .addField(`User PFP:`, `${message.author.displayAvatarURL({ format : 'png'})}`)
            .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ format : 'png'})}`)
            .setFooter(`ID: ${message.author.id}`)
            
            return message.channel.send(embed);
         } else {

            const embed = new MessageEmbed()
            .setColor("#ffff00")
            .addField(`Account Created the:`, ` ${user_mention.createdAt}`)
            //.addField(`Joined the server the:`, user_mention.joinedAt.format('dddd, MMMM Do YYYY, HH:mm:ss'))
            //.addField(`User roles: `, user_mention.roles.map(r => `${r}`).join(' | '))
            .addField(`User PFP:`, `${user_mention.displayAvatarURL({ format : 'png'})}`)
            .setAuthor(`${user_mention.tag}`, `${user_mention.displayAvatarURL({ format : 'png'})}`)
            .setFooter(`ID: ${user_mention.id}`)
           
            return message.channel.send(embed);
         }
      };
    
module.exports.help = {
         name: "info",
         aliases: ['information', 'user'],
         category: 'server',
         description: "give info about a user",
         usage: "(member)",
         cooldown: 10,
         args: false
      };     
