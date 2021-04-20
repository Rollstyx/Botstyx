'use strict';
 
module.exports = {
    name: 'sign',
    description: `Game: 8ball, returns a random message to user`,
    execute: async function (client, message, args) {

        const player = args.slice(0).join(" ") && args.shift().toLowerCase()

        const position = args.slice(1).join(" ") && args.shift().toLowerCase()

        const price = args.slice(2).join(" ") && args.shift().toLowerCase()

        let eightBall = [
            `${player} joined your team in a position ${position} worth ${price} rating: 55`,
            `${player} joined your team in a position ${position} worth ${price} rating: 56`,
            `${player} joined your team in a position ${position} worth ${price} rating: 57`,
            `${player} joined your team in a position ${position} worth ${price} rating: 58`,
            `${player} joined your team in a position ${position} worth ${price} rating: 59`,
            `${player} joined your team in a position ${position} worth ${price} rating: 60`,
            `${player} joined your team in a position ${position} worth ${price} rating: 61`,
            `${player} joined your team in a position ${position} worth ${price} rating: 62`,
            `${player} joined your team in a position ${position} worth ${price} rating: 63`,
            `${player} joined your team in a position ${position} worth ${price} rating: 64`,
            `${player} joined your team in a position ${position} worth ${price} rating: 65`,
            `${player} joined your team in a position ${position} worth ${price} rating: 66`,
            `${player} joined your team in a position ${position} worth ${price} rating: 67`,
            `${player} joined your team in a position ${position} worth ${price} rating: 68`,
            `${player} joined your team in a position ${position} worth ${price} rating: 69`,
            `${player} joined your team in a position ${position} worth ${price} rating: 70`,
            `${player} joined your team in a position ${position} worth ${price} rating: 71`,
            `${player} joined your team in a position ${position} worth ${price} rating: 72`,
            `${player} joined your team in a position ${position} worth ${price} rating: 73`,
            `${player} joined your team in a position ${position} worth ${price} rating: 74`,
            `${player} joined your team in a position ${position} worth ${price} rating: 75`,
            `${player} joined your team in a position ${position} worth ${price} rating: 76`,
            `${player} joined your team in a position ${position} worth ${price} rating: 77`,
            `${player} joined your team in a position ${position} worth ${price} rating: 78`,
            `${player} joined your team in a position ${position} worth ${price} rating: 79`,
            `${player} joined your team in a position ${position} worth ${price} rating: 80`,
            `${player} joined your team in a position ${position} worth ${price} rating: 81`,
            `${player} joined your team in a position ${position} worth ${price} rating: 82`,
            `${player} joined your team in a position ${position} worth ${price} rating: 83`,
            `${player} joined your team in a position ${position} worth ${price} rating: 84`,
            `${player} joined your team in a position ${position} worth ${price} rating: 85`,
            `${player} joined your team in a position ${position} worth ${price} rating: 86`,
            `${player} joined your team in a position ${position} worth ${price} rating: 87`,
            `${player} joined your team in a position ${position} worth ${price} rating: 88`,
            `${player} joined your team in a position ${position} worth ${price} rating: 89`,
            `${player} joined your team in a position ${position} worth ${price} rating: 90`,
            `${player} joined your team in a position ${position} worth ${price} rating: 91`,

        ];
 
        let answer = Math.floor(Math.random() * eightBall.length);
        if(!args[0]) return message.reply("Give a player name, position and price!");
 
        await message.channel.send({
            embed: {
                color: `#00ddff`,
                description: ` <@${message.author.id}>, ${eightBall[answer]}`,
                footer: {
                    text: `Somebody just bought ${player}`
                }
            }
        });
    }
    
};