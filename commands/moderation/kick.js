const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {
   // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');
   
   const user = message.mentions.users.first();
      const target = message.guild.member(user);

         let reason = args.slice(1).join(' ');
         if(!reason) reason = "None";

         if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!');
         if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.');
         if(!member) return message.channel.send('Can\'t seem to find this user.');
         if(!member.bannable) return message.channel.send('This user can\'t be banned. It is either because they are a mod/admin, or their highest role is higher than mine');
         if(member.id === message.author.id) return message.channel.send('You can\'t ban yourself!');
       if(!reason) return(reason = "No reason were specified");
       if(message.member.roles.highest.position < target.roles.highest.position) {
         return message.channel.send('You do not have a high enough role to kick this member!')
     }

       const embed = new MessageEmbed()
       .setColor("#ffff00")
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`Kick!`, `${message.author.tag} kicked ${user.tag}`)
       .addField(`Reason:`, `${reason}`)
       .setTimestamp()

       target.kick().then(async m => {
            await client.channels.cache.get("801757379573448723").send(embed);
            message.channel.send(embed);
            user.kick();
         })
};

module.exports.help = {
   name: "kick",
   aliases: ['kick'],
   category: 'moderation',
   description: "kick a user",
   usage: "(member) (reason)",
   cooldown: 0,
   args: true
};     
