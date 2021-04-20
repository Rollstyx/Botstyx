'use strict';
 
module.exports = {
    name: '8ball',
    description: `Game: 8ball, returns a random message to user`,
    execute: async function (client, message, args) {
 
        let eightBall = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes – definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
            'Outlook good',
            'Yes',
            'WHAT THE FUCK OF COURSE NO',
            'Reply hazy, try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Do not count on it',
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Shut yo bitch ass the fuck up',
            'Man idk why u asking me -_____-'
        ];
 
        let answer = Math.floor(Math.random() * eightBall.length);
        if(!args[2]) return message.reply("Please ask a full question!");
 
        await message.channel.send({
            embed: {
                color: `#00ddff`,
                description: `🎱 <@${message.author.id}>, ${eightBall[answer]}`,
                footer: {
                    text: `An idiot said: ${args.join(' ')}`
                }
            }
        });
    }
    
};