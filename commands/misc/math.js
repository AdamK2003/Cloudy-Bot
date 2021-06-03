const { MessageEmbed } = require("discord.js");
const math = require('discord-math');

module.exports.run =(client, message, args) => {

         const calcul = args.slice(1).join(' ');
         if (calcul === NaN) return("Please submit a calcul to do!");

         if (!args.length) {message.channel.send(`Please submit a calcul to do!`)} 

            return message.channel.send(`${math.calculate(calcul)}.`);
         
      };
    
module.exports.help = {
         name: "math",
         aliases: ['math', 'm'],
         category: 'server',
         description: "Do math for you.",
         usage: "(calcul)",
         cooldown: 3,
         args: true
      };     
