const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {

   var serverIcon = message.guild.iconURL();
   // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');


   const embed = new MessageEmbed()
      .setColor("#ffff00")
      .setTitle("Credits")
      .addField(`Made by`, "Max.,AdamSkl2003", true)
      .addField(`Help`, "AdamSkl2003,Ssorin,Teku", true)
      .addField(`Testing`, "Max,Jurassic,Ecto,YourFaceToots,Bibbon,ZackyBoy", true)
      .addField(`Ideas`, "Max,Jurassic,Ecto,YourFaceToots,Bibbon,ZackyBoy", true)
      .setFooter("Want to be in the credits? Give any command suggestions and if i like it,you'll get in!", serverIcon)
   
   message.channel.send(embed);
};

module.exports.help = {
   name: "credits",
   aliases: ['credits', 'credit'],
   category: 'misc',
   description: "Credits",
   usage: " ",
   cooldown: 0,
   args: false
};     
