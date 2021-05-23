module.exports.run =(client, message, args) => {
   // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');

   function randomnumb() {
    var rand = [
      "Yes",
      "No",
      "Maybe",
      "Idk lol",
      "Ask Jurassic",
      "Ummm",
      "No lmao",
      "Ofc",
      "I cannot say it"
    ];

    return rand[Math.floor(Math.random() * rand.length)];
  }
  
  message.reply(randomnumb())
};

module.exports.help = {
   name: "8ball",
   aliases: ['8ball'],
   category: 'misc',
   description: "Answer to all your questions.",
   usage: "<question>",
   cooldown: 0,
   args: true
};     