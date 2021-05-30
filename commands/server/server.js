const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {
   var serverIcon = message.guild.iconURL();

            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(message.guild.name, message.guild.icon)
            .addField(`Server created the: `, ` ${message.guild.createdAt}`, true)
            .addField(`Member: `, message.guild.memberCount, true)
            //.addField(`\nNumber of text channels `, message.guild.channels.filter((c) => c.type === "text").size, true)
            //.addField(`\nNumber of voice channels `, message.guild.channels.filter((c) => c.type === "voice").size, true)
            .setImage(serverIcon({format: "png", dynamic: true, size: 512}))
            .setFooter(`Server ID: ${message.guild.id}`)
           
            message.channel.send(embed);
         };
      
    
module.exports.help = {
         name: "server",
         aliases: ['server', 's'],
         category: 'server',
         description: "Give information about the server.",
         usage: "(member)",
         cooldown: 10,
         args: false
      };     
