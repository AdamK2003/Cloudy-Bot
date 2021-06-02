const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {

   const user = message.mentions.users.first();
      const target = message.guild.member(user);

      let role = message.guild.roles.cache.find(r => r.id === "809078514455543868");

       if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You can\'t use that!');
       if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I don\'t have the right permissions.');
       if(!target) return message.channel.send('Can\'t seem to find this user.');

       const embed = new MessageEmbed()
       .setColor("#ffff00")
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`Unmute!`, `${message.author.tag} unmuted ${user.tag}`)
       .setTimestamp()

         message.channel.send(embed).then(async m => {
            await client.channels.cache.get("846084525636845599").send(embed);
            target.roles.remove(role);
         })
};

module.exports.help = {
   name: "unmute",
   aliases: ['unmute', 'unmoot'],
   category: 'moderation',
   description: "Unmute a user",
   usage: "(member) (reason)",
   cooldown: 0,
   args: true
};     
