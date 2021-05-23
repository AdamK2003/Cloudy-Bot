module.exports.run =(client, message, args) => {
   // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');
   let arg = args.slice(0).join(' ');
   let lfg = message.guild.roles.cache.find(r => r.id === "801793303937941505");

   message.channel.send(`${message.author} want to play ${lfg}! **${arg}**.`)
   message.delete();
};

module.exports.help = {
   name: "lfg",
   aliases: ['lfg', 'p2p'],
   category: 'server',
   description: "Ping the LFG role.",
   usage: "(args)",
   cooldown: 120,
   args: false
};     