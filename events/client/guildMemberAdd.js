const { MessageEmbed } = require("discord.js");
const client = new Discord.Client({ ws: { intents: ['GUILD_PRESENCES', 'GUILD_MEMBERS'] }});

module.exports = (client, member) => {

   const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Welcome ${member.displayName} to the server!`)
            .setThumbnail(member.avatarURL({format: "png", dynamic: true, size: 128}))
            .setFooter(`User ID: ${member.id}`)
            .setTimestamp();
            
            client.channels.cache.get('846084493184860172').send(embed);
}