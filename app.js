const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NDM0NjQzOTEyNDk4MzQ4MDMy.DbNZNg.B_CFCYBast_83NGqKdXuMrdsT3E"
});

client.on('message', msg => {
  if (msg.content === '^^ping') {
    msg.reply('Pong!');
  }
});

client.login('NDM0NjQzOTEyNDk4MzQ4MDMy.DbNZNg.B_CFCYBast_83NGqKdXuMrdsT3E');
