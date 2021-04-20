const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const bot = new Discord.Client({ disableEveryone: true});

client.once('ready', () => {
     console.log('Botstyx is online!');
     client.user.setActivity(`Anime`, { type: 'WATCHING' });
 });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler => {
     require(`./handlers/${handler}`)(client, Discord);
})


client.login('NzkyMTA0NzE0MzcxODU4NDYy.X-Y3AA.PWFKK5Oa8O7zC0ENI5f0_xR-6zA');