const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {

         const user_mention = message.mentions.users.first();

         if (!args.length) {
            const user = message.author
            const target = message.guild.member(user);

            const mrole = target.roles.cache.filter(r => r !== '@everyone').map(role => role).join(' | ');

            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL())
            .addField(`Account Created the:`, ` ${message.author.createdAt}`)
            .addField(`User name: `, message.author.tag)
            .addField(`User nickname: `, message.author.username)
            .addField("User profile picture: ",message.author.avatarURL({format: "png", dynamic: true, size: 512}))
            .addField('Roles: ', mrole)
            .setFooter(`ID: ${message.author.id}`)
            
            return message.channel.send(embed);
         } else {
            const user = message.mentions.users.first();
            const target = message.guild.member(user);
      
            const mrole = target.roles.cache.filter(r => r.name !== '@everyone').map(role => role.name).join(' | ');

            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(user_mention.avatarURL())
            .addField(`Account Created the:`, ` ${user_mention.createdAt}`)
            .addField(`User name: `, user_mention.tag)
            .addField(`User nickname: `, user_mention.username)
            .addField("User profile picture: ",user_mention.avatarURL({format: "png", dynamic: true, size: 512}))
            .addField('Roles: ', mrole)
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
