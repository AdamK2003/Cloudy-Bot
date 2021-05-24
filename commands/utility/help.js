const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');

module.exports.run =(client, message, args) => {
   // if(message.author.id == "801763466968432640") return message.channel.send('https://media.discordapp.net/attachments/829012985598050376/840534974091624448/troll.jpg');

   var serverIcon = message.guild.iconURL();

   if (!args.length) {
      const embed = new MessageEmbed()
      .setColor("#4103fc")
      .setTitle("------Help command------")
      .addField("Commands List", `A list of all commnds available on the server with an help on how to use them!\n\n**For more informations about a specific command please type \`${process.env.PREFIX}help (Command Name)\`**`)

      for (const category of categoryList) {
         embed.addField(
            `${category}`,
               `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
         );
      };

      return message.channel.send(embed);
   } else {
      const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));

      const embed = new MessageEmbed()
      .setColor("#4103fc")
      .setTitle(`**${command.help.name} Command**`)
      .addField("Decription:", `${command.help.description} (cd: ${command.help.cooldown}s)`)
      .addField("How to use:", command.help.usage ? `${process.env.PREFIX}${command.help.name} ${command.help.usage}` : `${process.env.PREFIX}${command.help.name}`, true)

      if (command.help.aliases.length > 1) embed.addField('Alias', `${command.help.aliases.join(', ')}`, true);
      return message.channel.send(embed);
   }
};

module.exports.help = {
   name: "help",
   aliases: ['help'],
   category: 'server',
   description: "Give a list of all commands available on the server",
   usage: "(Command Name)",
   cooldown: 6,
   args: false
};     