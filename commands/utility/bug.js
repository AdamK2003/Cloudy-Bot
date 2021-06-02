const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {

   var serverIcon = message.guild.iconURL();

   const embed = new MessageEmbed()
   .addTitle(`-----Version Calendar-----`)
   .addField(`Alpha:`, `
   1.0: Start
   1.1: Mod fully done
   1.2: server + mod fully done
   1.4: server + mod + utility`, true)
   .addField(`Beta`,`
   2.0: Config bot done
   2.5: Fixing every bug
   2.7: Design / Make the bot better looking
   `, true)
   .addField(`Public`,`
   1.0: everything done + make a report bug command
   1.5: new commands
   2.0: currency system
   `, true)
   .setFooter("➡️ Cloudy version: 1.1 Alpha", serverIcon)
   
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
