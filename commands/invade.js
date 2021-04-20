'use strict';

module.exports = {
    name: 'invade',
    description: 'invade',
    execute(client, message, args) {
    
        let eightBall = [
            'You won congrats!',
            'You failed the raid, try again soldier!',
            'You got 25% of his territory',
            'You got 50% of his territory',
            'You got 75% of his territory',
            'The enemy surrendered',
            'Enemy kicked ur ass',
        ];
 
        let answer = Math.floor(Math.random() * eightBall.length);
        if(!args[0]) return message.reply("Tell me who should i invade!");

        message.channel.send({
            embed: {
                color: `#00ddff`,
                description: `🎱${eightBall[answer]}`,
            }
        });
    }
}