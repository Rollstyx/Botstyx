module.exports = {
    name: 'uclsoccer',
    description: `Game: 8ball, returns a random message to user`,
    execute: async function (client, message, args) {
        const club = args.slice(0).join(" ") && args.shift().toLowerCase()

        let eightBall = [
            `You won 1st leg 1-0 and 2nd leg 2-1`
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