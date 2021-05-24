const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
   const user = message.mentions.users.first();
   const target = message.guild.member(user);
   
   let reason = args.slice(1).join(' ');
   if(!reason) reason = "Undefined";

       if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!');
       if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.');
       if(!target) return message.channel.send('Can\'t seem to find this user.');
       if(!reason) return(reason = "No reason were specified");
       if(message.member.roles.highest.position < target.roles.highest.position) {
         message.channel.send('You do not have a high enough role to ban this member!'); }
      if(message.author = target) return message.channel.send("Umm...You can't ban yourself?");

       const embed = new MessageEmbed()
       .setColor("#ffff00") 
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`**Ban!** 🔨`, `${message.author.tag} banned ${user.tag} from the server!`)
       .addField(`**Reason**:`, `\`${reason}\``)
       .setTimestamp()

         message.channel.send(embed).then(async m => {
            await client.channels.cache.get("846084525636845599").send(embed);
            target.ban();
         })
};

module.exports.help = {
   name: "ban",
   aliases: ['ban'],
   category: 'Moderation',
   description: "Ban a user",
   usage: "(user) <reason>",
   cooldown: 0,
   args: true
};
