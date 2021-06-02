const { MessageEmbed, Message } = require("discord.js");

module.exports = (client, member) => {
            
            client.channels.cache.get('846084493184860172').send(`> Welcome ${member}!`);
}