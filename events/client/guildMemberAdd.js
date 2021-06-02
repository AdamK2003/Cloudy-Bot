const { MessageEmbed, Message, Guild } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`\nWelcome ${member} to ${guild.name}!\n`)
            //.setThumbnail(member.avatarURL({format: "png", dynamic: true, size: 128}))
            .setTimestamp();
            
            client.channels.cache.get('846084493184860172').send(embed);
}