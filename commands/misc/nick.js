module.exports.run =(client, message, args) => {
   let target = message.mentions.members.first();
   // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');


      if(!target) {
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
