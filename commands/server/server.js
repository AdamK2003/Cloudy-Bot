const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {

            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(message.guild.name, message.guild.icon)
            .addField(`Server created the: `, ` ${message.guild.createdAt}`, true)
            .addField(`Member: `, message.guild.memberCount, true)
            .addField(`\nNumber of text channels `, message.guild.channels.filter((c) => c.type === "text").size, true)
            .addField(`\nNumber of voice channels `, message.guild.channels.filter((c) => c.type === "voice").size, true)
            .setImage(message.guild.icon({format: "png", dynamic: true, size: 512}))
            .setFooter(`Server ID: ${message.guild.id}`)
           
            message.channel.send(embed);
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
