module.exports = {
    name: 'playsoccer',
    description: `Game: 8ball, returns a random message to user`,
    execute: async function (client, message, args) {

        const club = args.slice(0).join(" ") && args.shift().toLowerCase()

        let eightBall = [
            `You won 1-0 against ${club}!`,
            `You won 2-0 against ${club}!`,
            `You won 3-0 against ${club}!`,
            `You won 4-0 against ${club}!`,
            `The match ended as a draw 1-1 against ${club}!`,
            `You lost 1-2 against ${club}!`,
            `You lost 1-3 against ${club}!`,
            `You lost 1-4 against ${club}!`,
            `You won 4-2 against ${club}!`,
            `You won 5-2 against ${club}!`,
            `You won 3-0 against ${club}!`,
            `You won 2-1 against ${club}!`,
            `You won 3-2 against ${club}!`,
            `You lost 2-3 against ${club}!`,
            `You won 4-2 against ${club}!`,
            `You lost 2-5 against ${club}!`,
            `You lost 1-7 against ${club}!`,
            `You lost 0-4 against ${club}!`,
            `You lost 0-1 against ${club}!`,
            `You lost 0-3 against ${club}!`,
            `You lost 0-2 against ${club}!`,
            `Match ended as a draw 0-0 against ${club}!`,
            `Match ended as a draw 3-3 against ${club}!` 

        ];
 
        let answer = Math.floor(Math.random() * eightBall.length);
        if(!args[0]) return message.reply("What club are you playing against?");
 
        await message.channel.send({
            embed: {
                color: `#00ddff`,
                description: `${eightBall[answer]}`,
            }
        });
    }
    
};