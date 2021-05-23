module.exports.run =(client, message, args) => {
   // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');

   message.channel.send(`Pong! ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
};

module.exports.help = {
   name: "ping",
   aliases: ['ping'],
   category: 'server',
   description: "ping the bot",
   usage: " ",
   cooldown: 6,
   args: false
};     
