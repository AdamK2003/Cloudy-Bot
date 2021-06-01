const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {

   var serverIcon = message.guild.iconURL();

   const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Bip boop.You found a bug? 🤖")
      .addField(`What is this command?`, "This command as been made if someone found a bug.If you do find one here is what to do:")
      .addField(`\nIf its a major problem (The bot spam/everyone can use moderation command/give wrong roles....)`, "-Kick the bot and contact the admin: Max.#8538 a soon as possible and explain the problem.", true)
      .addField(`\nIf its a minor problem:`, "-Report it (!help report),and if it is annoying to you mute it.An admin will maybe dm you for more information.", true)
      .addField(`\nIf you don't have a problem.`, "Welp do nothing lol.But keep in mind that the bot finished or not can have bugs so if you find one,don't be surprised.\n", true)
      .setFooter("➡️ Cloudy version: 1.1 Alpha", serverIcon)
   
   message.channel.send(embed);
};

module.exports.help = {
   name: "bug",
   aliases: ['bug', 'bugs', 'problem'],
   category: 'utility',
   description: "Report a bot bug.\nDon't do jokes report please!!",
   usage: " ",
   cooldown: 0,
   args: false
};     
