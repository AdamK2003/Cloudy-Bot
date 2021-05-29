module.exports = client => {
   console.log(`Logged in as ${client.user.tag}!`);
   if(process.env.ENVIRONMENT == "testing") {
       client.user.setPresence({
         status: 'online',
         activity: {
             name: "TESTING MODE | My Prefix is " + process.env.PREFIX,
             type: "WATCHING"
         }
     })
   } else {
       client.user.setPresence({
         status: 'online',
         activity: {
             name: "Visual Studio Code",
             type: "PLAYING"
         }
     })
   }
}