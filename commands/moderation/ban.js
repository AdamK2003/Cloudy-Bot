const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
   // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');
   
   const user = await client.users.fetch(args [0]);

       if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('You can\'t use that!');
       if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.');
       if(!target) return message.channel.send('Can\'t seem to find this user.');
       if(!reason) return(reason = "No reason were specified");
       if(message.member.roles.highest.position < target.roles.highest.position) {
         return message.channel.send('You do not have a high enough role to ban this member!')
     }

       const embed = new MessageEmbed()
       .setColor("#ffff00")
       .setAuthor(`By ${message.author.tag}`, message.author.displayAvatarURL())
       .addField(`Ban!`, `${message.author.tag} banned ${user.tag} from the server!`)
       .setTimestamp()

         message.channel.send(embed).then(async m => {
            await client.channels.cache.get("801757379573448723").send(embed);
            target.ban();
         })
};

module.exports.help = {
   name: "ban",
   aliases: ['ban'],
   category: 'moderation',
   description: "Ban a user",
   usage: "(user)",
   cooldown: 0,
   args: true
};
