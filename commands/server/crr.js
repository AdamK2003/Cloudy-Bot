module.exports.run =(client, message, args) => {
   message.delete();

   let roleName = args.slice(0).join(' ')
   let roleC = message.guild.roles.cache.find(r => r.name === roleName)

   let emote =  args[1];

   if(!message.guild.roles.cache.find(r => r.name === roleName)) { message.channel.send("Invalid role!") };
   if(!roleName) return(message.channel.send(`Please specify a role name.Be careful to cap letter,this command is case sinsitive.`));
   if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You can\'t use that!');
     if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I don\'t have the right permissions.');
     if(message.member.roles.highest.position < roleC) {
      message.channel.send('You do not have a high enough role to add this role to a react role message.'); }

   message.channel.send(`React to this message with ${emote} to get the \`${roleC}\` role!`).then(async m => { 
      m.react(emote);
   })
   if (!user.bot) {
      if (reaction.emoji.id == emote) {

          const { guild } = reaction.message

          const member = guild.members.cache.find(member => member.id === user.id); //find the member who reacted (because user and member are seperate things)
          const target = message.guild.member(user);

         target.roles.add(roleC);

      }}
};

module.exports.help = {
   name: "crr",
   aliases: ['crr', 'nrr'],
   category: 'server',
   description: "Create a react role text.",
   usage: "(role) (emote)",
   cooldown: 10,
   args: true
};     