const Discord = require('discord.js');
const client = new Discord.Client();
var http = require('http'); 
const delay = require('delay');

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
   if (msg.content.startsWith('!')) {
      msgContent = msg.content.substring(1);
      if(msgContent == 'plan'){
         delBotMessages(msg, false);
         getPlan(msg)
         msg.channel.send('Einen Moment, lade den Vertretungsplan...');
         setTimeout(parsePlan, 3000, msg);
      }
      else if(msgContent == 'clear'){
         delBotMessages(msg, true);
      }
      else{
         msg.channel.send(`(${msgContent})Dieser Befehl ist mir nicht bekannt. Sry.`);
      }
      delCommandMessages(msg, false);
   }
});

<<<<<<< HEAD
function delBotMessages(msg, print = false){
   if (msg.channel.type == 'text') {
      msg.channel.fetchMessages().then(messages => {
         const botMessages = messages.filter(message => message.author.bot);
         msg.channel.bulkDelete(botMessages);
         messagesDeleted = botMessages.array().length; // number of messages deleted

         // Logging the number of messages deleted on both the channel and console.
         if(print){
            msg.channel.send("Alle Bot-Nachrichten gelöscht. Im totalen: " + messagesDeleted);
         }
         console.log('Deletion of messages successful. Total messages deleted: ' + messagesDeleted)
      }).catch(err => {
         console.log('Error while doing Bulk Delete');
         console.log(err);
      });
   }
}

function delCommandMessages(msg, print = false){
   if (msg.channel.type == 'text') {
      msg.channel.fetchMessages().then(messages => {
         const botMessages = messages.filter(message => message.content.startsWith('!'));
         msg.channel.bulkDelete(botMessages);
         messagesDeleted = botMessages.array().length; // number of messages deleted

         // Logging the number of messages deleted on both the channel and console.
         if (print){
            msg.channel.send("Alle Befehlsnachrichten gelöscht. Im Totalen: " + messagesDeleted);
         }
         console.log('Deletion of messages successful. Total messages deleted: ' + messagesDeleted)
      }).catch(err => {
         console.log('Error while doing Bulk Delete');
         console.log(err);
      });
   }
}

tmpstring = ""
function getPlan(msg){
      finished = false
   var options = {
      host: 'www.gymnasium-othmarschen.de',
      port: 80,
      path: '/plan.php',
      method: 'POST'
   };
   var req = http.request(options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function(value){
         tmpstring += value;
      });
   });
   req.end();
   // msg.channel.send(tmpstring) 
}

function parsePlan(msg){
   tmp = tmpstring.split('table')[1].split('\n')
   console.log(tmp.length);
   for(i = 0; i<tmp.length; i++){
      if (!tmp[i].includes('12') && !tmp[i].includes('Montag') && !tmp[i].includes('Dienstag') && !tmp[i].includes('Mittwoch') && !tmp[i].includes('Donnerstag') && !tmp[i].includes('Freitag')){
         tmp.splice(i, 1)
         i--
      }
      else{
         // the date
         tmp[i] = tmp[i].replace('border=0 width=100%><tr><td colspan=5><font face=arial color=#79170E size=4><b>Vertretungsplan f&uuml;r', '')
         tmp[i] = tmp[i].replace('</b><hr></font></td></tr>', ':')

         // one way they can be
         tmp[i] = tmp[i].replace("<tr><td width=65  align=center><font face=arial size=3>", "")
         tmp[i] = tmp[i].replace(" </font></td><td width=95  align=center><font face=arial size=3>", ": ")
         tmp[i] = tmp[i].replace('</font></td><td width=* ><font face=arial size=3 ><b>', ': ')
         tmp[i] = tmp[i].replace('</b></font><font face=arial size=2><br>', ', ')

         // the other way
         tmp[i] = tmp[i].replace("<tr><td width=65 bgcolor=eeeeee align=center><font face=arial size=3>", '')
         tmp[i] = tmp[i].replace(' </font></td><td width=95 bgcolor=eeeeee align=center><font face=arial size=3>', ': ')
         tmp[i] = tmp[i].replace('</font></td><td width=* bgcolor=eeeeee><font face=arial size=3 ><b>', ': ')
         tmp[i] = tmp[i].replace('</b></font></td></tr>', '')

         // page end
         tmp[i] = tmp[i].replace("</b></font></td></tr>", '')

         // weil der scheiss manchmal einfach ein Krampf ist
         tmp[i] = tmp[i].replace('</b>', '')
         tmp[i] = tmp[i].replace('</b>', '')
         tmp[i] = tmp[i].replace('<b>', '')
         tmp[i] = tmp[i].replace('</font></td></tr>', '')
      }
   }
   output = ""
   tmp.forEach(function(value){
      output += value + '\n'
   })
   msg.channel.send(output);
}

client.login('NjU0NTg3NTY0NTcyOTM0MTQ0.XfIfRA.Yn3Rus_PCtTe7LxEq3vErLxayzU');
=======
client.login('NjU0NTg3NTY0NTcyOTM0MTQ0.XfId5g.IyfM407oT5V2bwQ9ViWN0MpWrH0');
>>>>>>> 617626e49e962a69dfcd8eacc03013e9ab210d00
