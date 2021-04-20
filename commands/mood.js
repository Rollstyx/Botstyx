'use strict';
 
module.exports = {
    name: 'mood',
    description: `Game: mood, returns a random message to user`,
    execute: async function (client, message, args) {
 
        let eightBall = [
            'Rollstyx is sad',
            'Rollstyx is mad',
            'Rollstyx is extra angry',
            'Rollstyx is depressed',
            'Rollstyx is happy',
            'Rollstyx is dying of laughing',
            'Rollstyx is fine'
        ];
 
        let answer = Math.floor(Math.random() * eightBall.length);
        if(args[1] < 100) return message.reply("Bruh");
 
        await message.channel.send({
            embed: {
                color: `#00ddff`,
                description: `🎱 <@${message.author.id}>, ${eightBall[answer]}`,
            }
        });
    }
};