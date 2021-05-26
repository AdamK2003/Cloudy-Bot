const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {

         const user_mention = message.mentions.users.first();

         if (!args.length) {

            const embed = new MessageEmbed()
            .setColor("#4103fc")
            .setDescription("Nice pfp!")
            .setImage(message.author.avatarURL({format: "png", dynamic: true, size: 512}))
            
            return message.channel.send(embed);
         } else {

            const embed = new MessageEmbed()
            .setColor("#4103fc")
            .setDescription("Nice pfp!")
            .setImage(user_mention.avatarURL({format: "png", dynamic: true, size: 128}))
           
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
