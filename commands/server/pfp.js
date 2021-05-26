const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {

         const user_mention = message.mentions.users.first();

         if (!args.length) {

            const embed = new MessageEmbed()
            .setColor("#4103fc")
            .addField(`Pfp of ${message.author.tag}`, ` ${message.author.avatarURL}`)
            
            return message.channel.send(embed);
         } else {

            const embed = new MessageEmbed()
            .setColor("#4103fc")
            .addField(`Ptofile picture of ${message.author.tag}`, ` ${user_mention.avatarURL}`)
           
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
