const Discord = require('discord.js');

const client = new Discord.Client({ 
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

const fs = require('fs');

const prefix = '%'

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity("Made by Hanako#0007 <3", {
    type: "PLAYING"
  });
});


client.on('message', message => {
    if(message.content.toLowerCase().includes('dead chat')) {
        message.channel.send('then make it alive')
    } else if(message.content.toLowerCase().includes('am i hot')) {
        message.channel.send('yea but not as hot as me')
    } else if(message.content.toLowerCase().includes('cries')) {
        message.channel.send('dont cry tf')
    }
});

//made by Hanako#0007 !

client.login('token-goes-here');
