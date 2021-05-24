const mongoose = require('mongoose')

const db = process.env.DB


mongoose.connect(db)

const Link = require(process.env.ROOTDIR + '/models/links.js')


const Discord = require('discord.js')


module.exports.run =(client, message, args) => {

   if(args[0] = "steam") {

   let rUser = message.author;
   let steam = args.slice(1).join(" ")
   if(!steam) return message.reply("Please supply a steam ID.")

Link.find({ userID: message.author.id }, (err, arr) => {

 if(!arr[0]) {
   const link = new Link({
       _id: mongoose.Types.ObjectId(),
       userID: message.author.id,
       Steam: steam
   })
   
   link.save()
.then(result => console.log(result))
.catch(err => console.log(err));

   message.channel.send(`${message.author} set their steam ID to \`${steam}\`.`);

   return
    }

    let dbID = arr[0]._id

Link.update({ _id: dbID }, { steam: steam } , err => {
    if(err) return console.log("An error has occurred when updating DB entry!\n\n" + err)
    })

   message.channel.send(`${message.author} set their steam ID to \`${steam}\`.`);
      });
   }
   // ps
   if(args[0] = "ps") {

      let rUser = message.author;
      let ps = args.slice(1).join(" ")
      if(!ps) return message.reply("Please supply a ps ID.")
   
   Link.find({ userID: message.author.id }, (err, arr) => {
   
    if(!arr[0]) {
      const link = new Link({
          _id: mongoose.Types.ObjectId(),
          userID: message.author.id,
          Ps: ps
      })
      
      link.save()
   .then(result => console.log(result))
   .catch(err => console.log(err));
   
      message.channel.send(`${message.author} set their ps ID to \`${ps}\`.`);
   
      return
       }
   // Microsoft ID
       let dbID = arr[0]._id
   
   Link.update({ _id: dbID }, { Microsoft: gamertag } , err => {
       if(err) return console.log("An error has occurred when updating DB entry!\n\n" + err)
       })
   
      message.channel.send(`${message.author} set their Microsoft Gamertag to \`${ps}\`.`);
         });
      }
      if(args[0] = "microsoft") {

         let rUser = message.author;
         let xbox = args.slice(1).join(" ")
         if(!xbox) return message.reply("Please supply a Microsoft Gamertag.")
      
      Link.find({ userID: message.author.id }, (err, arr) => {
      
       if(!arr[0]) {
         const link = new Link({
             _id: mongoose.Types.ObjectId(),
             userID: message.author.id,
             Microsoft_Gamertag: xbox
         })
         
         link.save()
      .then(result => console.log(result))
      .catch(err => console.log(err));
      
         message.channel.send(`${message.author} set their Microsoft Gamertag to \`${xbox}\`.`);
      
         return
          }
      
          let dbID = arr[0]._id
      
      Link.update({ _id: dbID }, { steam: steam } , err => {
          if(err) return console.log("An error has occurred when updating DB entry!\n\n" + err)
          })
      
         message.channel.send(`${message.author} set their steam ID to \`${xbox}\`.`);
            });
         }
         // Switch
         if(args[0] = "switch") {

            let rUser = message.author;
            let fc = args.slice(1).join(" ")
            if(!fc) return message.reply("Please supply a Freind Code.")
         
         Link.find({ userID: message.author.id }, (err, arr) => {
         
          if(!arr[0]) {
            const link = new Link({
                _id: mongoose.Types.ObjectId(),
                userID: message.author.id,
                Friend_Code: fc
            })
            
            link.save()
         .then(result => console.log(result))
         .catch(err => console.log(err));
         
            message.channel.send(`${message.author} set their friend code to \`${fc}\`.`);
         
            return
             }
         
             let dbID = arr[0]._id
         
         Link.update({ _id: dbID }, { steam: steam } , err => {
             if(err) return console.log("An error has occurred when updating DB entry!\n\n" + err)
             })
         
            message.channel.send(`${message.author} set their friend code to \`${fc}\`.`);
               });
            }
         
      
}


module.exports.help = {
   name: "link",
   aliases: ['link', 'setplatform'],
   category: 'server',
   description: "Link your games account to your profile.",
   usage: "<platform: Steam/Ps/Microsoft/Nintendo> <username/code>",
   cooldown: 6,
   args: true
};     
