const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {

         const user_mention = message.mentions.users.first();

         let rolemap = message.guild.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(r => r)
            .join(",");
            if (rolemap.length > 1024) rolemap = "To many roles to display";
            if (!rolemap) rolemap = "No roles";

         if (!args.length) {

            const embed = new MessageEmbed()
            .setColor("#ffff00")
            .addField(`Account Created the:`, ` ${message.author.createdAt}`)
            .addField(`User name: `, message.author.tag)
            .addField(`User nickname: `, message.author.username)
            .addField("User profile picture: ",message.author.avatarURL({format: "png", dynamic: true, size: 512}))
            .addField('Roles:', rolemap)
            .setFooter(`ID: ${message.author.id}`)
            
            return message.channel.send(embed);
         } else {

            const embed = new MessageEmbed()
            .setColor("#ffff00")
            .addField(`Account Created the:`, ` ${user_mention.createdAt}`)
            .addField(`User name: `, user_mention.tag)
            .addField(`User nickname: `, user_mention.username)
            .addField("User profile picture: ",user_mention.avatarURL({format: "png", dynamic: true, size: 512}))
            .addField('Roles:', rolemap)
            .setFooter(`ID: ${user_mention.id}`)
           
            return message.channel.send(embed);
         }
      };
    
module.exports.help = {
         name: "info",
         aliases: ['information', 'i'],
         category: 'server',
         description: "give info about a user",
         usage: "<member>",
         cooldown: 10,
         args: false
      };     
