const Discord = require('discord.js');
const client = new Discord.Client();
const token = "Token"
});

client.on('message', msg => {
  if (msg.content === '^^ping') {
    msg.reply('Pong!');
  }
});

client.login('Client Token');
