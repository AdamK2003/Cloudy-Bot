const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {
   var serverIcon = message.guild.iconURL();

   let rolemap = message.guild.roles.cache
   .sort((a, b) => b.position - a.position)
   .map(r => r)
   .join(" | ");
   if (rolemap.length > 1024) rolemap = "To many roles to display";
   if (!rolemap) rolemap = "No roles";

            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(message.guild.name, message.guild.icon)
            .addField(`Server created the: `, ` ${message.guild.createdAt}`, true)
            .addField(`Member: `, message.guild.memberCount, true)
            .addField(`\nNumber of channels: `, message.guild.channels.size, true)
            .addField(`\nNumber of categories: `, message.guild.category.size, true)
            .addField(`Roles:`, rolemap)
            .setThumbnail(serverIcon)
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
