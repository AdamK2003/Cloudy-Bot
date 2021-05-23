module.exports.run =(client, message, args) => {
   // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');

   message.channel.send(args.join(" "));
   message.delete();
};

module.exports.help = {
   name: "say",
   aliases: ['say', 'repeat'],
   category: 'misc',
   description: "make the bot say what you said",
   usage: "<text>",
   cooldown: 10,
   args: true
};     