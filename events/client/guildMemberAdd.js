const { MessageEmbed, Message } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Welcome ${member} to the server!`)
            .setThumbnail(member.avatarURL({format: "png", dynamic: true, size: 128}))
            .setFooter(`User ID: ${member.id}`)
            .setTimestamp();
            
            client.channels.cache.get('846084493184860172').send(embed);
}