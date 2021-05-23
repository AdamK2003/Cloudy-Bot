module.exports.run =(client, message, args) => {
   // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');
   let arg = args.slice(0).join(' ');
   let gd = message.guild.roles.cache.find(r => r.id === "801768165611929600");

   message.channel.send(`${message.author} have a pfp request: **${arg}**! ${gd}.`)
   message.delete();
};

module.exports.help = {
   name: "pfp",
   aliases: ['pfp'],
   category: 'misc',
   description: "Ping the Graphic Designer role.",
   usage: "(wyw)",
   cooldown: 120,
   args: true
};     