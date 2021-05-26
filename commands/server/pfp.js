const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {

         let mentionedUser = message.mentions.users.first() || message.author


         if (!args.length) {

            const embed = new MessageEmbed()
            .setColor("#4103fc")
            .setImage(message.author.displayAvatarURL)
            
            return message.channel.send(embed);
         } else {

            const embed = new MessageEmbed()
            .setColor("#4103fc")
            .setImage(mentionedUser.displayAvatarURL)
           
            return message.channel.send(embed);
         }
      };
    
module.exports.help = {
         name: "pfp",
         aliases: ['pfp', 'show'],
         category: 'server',
         description: "Show the full pfp of you/member mentionned.",
         usage: "<member>",
         cooldown: 5,
         args: false
      };     
