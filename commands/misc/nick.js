module.exports.run =(client, message, args) => {
   let target = message.mentions.members.first();

      if(!target) {
         if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I don\'t have the right permissions.');
         let nick = args.slice(0).join(' ');
         message.member.setNickname(nick);
         if(nick) return message.channel.send(`${message.author} changed his nickname to **${nick}**!`);
         return message.channel.send(`${message.author} reset their nickname!`)
      } else {

         if(message.member.roles.highest.position < target.roles.highest.position) {
            return message.channel.send('You do not have a high enough role to change this member\'s nickname')
         }
         
         let nick = args.slice(1).join(' ');
         target.setNickname(nick);
         if(nick) return message.channel.send(`${message.author} changed ${target}'s nickname to **${nick}**!`);
         return message.channel.send(`${message.author} reset ${target}'s nickname!`)
      }
   };



module.exports.help = {
   name: "nick",
   aliases: ['nick'],
   category: 'misc',
   description: "Nick yourself or someone",
   usage: "[mention] <nickname>",
   cooldown: 10,
   args: false
};     
