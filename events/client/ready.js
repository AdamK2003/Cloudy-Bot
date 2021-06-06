module.exports = client => {
   console.log(`Logged in as ${client.user.tag}!`);
   if(process.env.ENVIRONMENT == "testing") {
       client.user.setPresence({
         status: 'online',
         activity: {
             name: "TESTING MODE",
             type: "WATCHING"
         }
     })
   } else {
       client.user.setPresence({
         status: 'online',
         activity: {
             name: "Visual Studio Code | Making difficult commands",
             type: "PLAYING"
         }
     })
   }
}