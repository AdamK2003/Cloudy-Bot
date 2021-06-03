const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {

   var serverIcon = message.guild.iconURL();

   const embed = new MessageEmbed()
   .setTitle(`**-----Version Calendar-----**`)
   .addField(`Alpha:`, `1.0: Start\n1.1: Mod fully done\n1.2: server + mod fully done\n1.4: server + mod + utility`, true)
   .addField(`Beta`,`2.0: Config bot done\n2.5: Fixing every bug\n2.7: Design / Make the bot better looking`, true)
   .addField(`Public`,`1.0: everything done + make a report bug command\n1.5: new commands\n2.0: currency system`, true)
   .setFooter("➡️ Cloudy version: 1.2 Alpha", serverIcon)
   
   message.channel.send(embed);
};

module.exports.help = {
   name: "version",
   aliases: ['version', 'versions'],
   category: 'utility',
   description: "See the bot version and the to do list",
   usage: " ",
   cooldown: 0,
   args: false
};     
