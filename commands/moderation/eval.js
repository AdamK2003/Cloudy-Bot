module.exports.run = async (client, message, args) => {
   function clean(text) {
      if (typeof text === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      return text;
   }

   if (message.author.id !== "364479855431122956") return;
   const code = args.join(" ");
   const evaled = eval(code);
   const cleanCode = await clean(evaled);
   message.channel.send(cleanCode, { code: "js"});
};



module.exports.help = {
   name: "eval",
   aliases: ['eval'],
   category: 'moderation',
   description: "test",
   usage: "",
   cooldown: 10,
   args: false
};     
