const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
   const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Welcome ${member.displayName} to the server!`)
            .setThumbnail(user_mention.avatarURL({format: "png", dynamic: true, size: 128}))
            .setFooter(`User id: ${member.id}`)
            .setTimestamp();
            
            client.channels.cache.get('846084493184860172').send(embed);
}