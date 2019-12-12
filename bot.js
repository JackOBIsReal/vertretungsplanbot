const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
   if (msg.content.startsWith('!')) {
      msgContent = msg.content.substring(1);
      msg.delete();
      if(msgContent == 'ping'){
         msg.channel.send("pong")
      }
      if(msgContent == 'plant'){
         msg.channel.send('Der Bot ist derzeitig noch nicht fertig. Schau doch hier vorbei: http://www.gymnasium-othmarschen.de/plan.php')
      }
   }
});

client.login('NjU0NTg3NTY0NTcyOTM0MTQ0.XfIZjQ.u-tWLomNezI0qE8nkf0QJ9NYnVA');