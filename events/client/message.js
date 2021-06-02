const { Collection } = require('discord.js');

module.exports = (client, message) => {
   if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
  const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
  //agrs coupe la commande en plusieurs parti a partir de " " ( !pfp @test @test& = @test, @test1)
  const commandName = args.shift().toLowerCase();
  // va garder seulement la command (!pfp @test @test& = @test, @test1 = !pfp)


  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;

  if (command.help.args && !args.length) {
    let noArgsReply = `${message.author} This command requires arguments.`;

    if (command.help.usage) noArgsReply += `\nUsage: ${process.env.PREFIX}${command.help.name} ${command.help.usage}`

    return message.channel.send(noArgsReply);
  }

  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  }

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldown || 0) * 1000;

  if (tStamps.has(message.author.id)) {
   const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

   if (timeNow < cdExpirationTime) {
     timeLeft = (cdExpirationTime - timeNow) / 1000;
     return message.channel.send(`${message.author} Please wait ${timeLeft.toFixed(0)}s before typing this command again!`);
   }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(client, message, args);
}