const mongoose = require('mongoose')

const db = process.env.DB


mongoose.connect(db)

const Currency = require(process.env.ROOTDIR + '/models/currency.js')


const Discord = require('discord.js')

const { MessageEmbed } = require("discord.js");

module.exports.run =(client, message, args) => {
   
   function randomnumb() {
   var rand = [
      "tiger",
    ];
    return rand[Math.floor(Math.random() * rand.length)];
  }
       
         const animals = new Currency({
            tiger: String,
            parrots: String,
            nothing: String,
            RoyalEagle: String,
            rhinoceros: String,
            giraffe: String,
            earthworms: String,
            snake: String,
        })

        if (randomnumb == "tiger") { const currency = new Currency({
         userID: message.author.id,
         tiger: db.add(1)
     })}
        
        currency.update({ _id: dbID }, { fc: fc } , err => {
         if(err) return console.log("An error has occurred when updating DB entry!\n\n" + err)
         })

         message.channel.send("You hunted 1 tiger.Woah!")
};

module.exports.help = {
   name: "hunt",
   aliases: ['hunt'],
   category: 'moderation',
   description: "hunt to find animals",
   usage: " ",
   cooldown: 30,
   args: false
};     
