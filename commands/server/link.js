const mongoose = require('mongoose')

const db = process.env.DB


mongoose.connect(db)

const FC = require(process.env.ROOTDIR + '/models/links.js')


const Discord = require('discord.js')


module.exports.run = (client, message, args) => {
   var platform = [
      "PS",
      "Switch",
      "Xbox",
      "Microsoft",
      "Steam",
      "Pc",
      "Nintendo"
    ];

    let rUser = message.author;
    let fc = args.slice(1).join(" ")
    let type = args[0].toLowerCase()
    if (!fc) return message.reply("Please supply a friend code.")
    if(!platform.includes(type)) return message.reply("Please supply a platform to set your fc/Gamertag/ID on!\nPlatforms: Pc,Ps,Xbox and Switch.")
    
    FC.find({ userID: message.author.id, type: type }, (err, arr) => {

        if (!arr[0]) {
            const fcs = new FC({
                _id: mongoose.Types.ObjectId(),
                userID: message.author.id,
                fc: fc,
                type: type
            })

            fcs.save()
                .then(result => console.log(result))
                .catch(err => console.log(err));

            message.channel.send(`${message.author} set their Fc/Gamertag/ID for platform \`${type}\` to \`${fc}\``);
            message.delete();

            return
        }

        let dbID = arr[0]._id

        FC.update({ _id: dbID }, { fc: fc }, err => { // replace exp: expVal with fc: fc
            if (err) return console.log("An error has occurred when updating DB entry!\n\n" + err)
        })

        message.channel.send(`${message.author} set their fc to \`${fc}\``);
        message.delete();
    });
}

module.exports.help = {
    name: "link",
    aliases: ['link', 'linkfc'],
    category: 'server',
    description: "Set the friend code/Gamertag/ID of message author for platform",
    usage: "<platform> <Fc/Gamertag/ID>",
    cooldown: 6,
    args: true
};