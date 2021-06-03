const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {

         const calcul = args.slice(1).join(' ');
         if (calcul(NaN)) return("Please submit a calcul to do!");

         if (!args.length) {message.channel.send(`Please submit a calcul to do!`)} 

           Math.calcul() = result
            return message.channel.send(`${calcul} is equal to `,result);
         
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
