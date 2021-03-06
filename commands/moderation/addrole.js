const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {

   const user = message.mentions.users.first();
      const target = message.guild.member(user);

      let roleName = args.slice(1).join(' ');
      let role = message.guild.roles.cache.find(r => r.name === roleName);

      if(!roleName) return(message.channel.send(`Please specify which role you want to add to ${user} by saying the role name.`));
      if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You can\'t use that!');
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I don\'t have the right permissions.');
        if(!member) return message.channel.send('Can\'t seem to find this user.');
        if(message.member.roles.highest.position < role.roles.highest.position) {
         message.channel.send('You do not have a high enough role to add this role to this member!'); }

       const embed = new MessageEmbed()
       .setColor("#25de00")
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`Role Added!`, `${message.author.tag} added the ${role.name} role to ${user.tag}`)
       .setTimestamp()


         target.roles.add(role).then(async m => {
            await message.channel.send(embed);
            client.channels.cache.get("846084525636845599").send(embed);
         })
};

module.exports.help = {
   name: "addrole",
   aliases: ['addr', 'giverole', 'give'],
   category: 'moderation',
   description: "give a role to a member",
   usage: "(member) (role)",
   cooldown: 6,
   args: true
};     
