const { MessageEmbed, Message, Guild } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
            
            client.channels.cache.get('846084493184860172').send(`Welcome ${member} to ${guild.name}`);
}

// would be cool in he future to be able to edit the welcome message on a specific guild.