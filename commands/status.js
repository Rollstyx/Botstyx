module.exports = {
    name: 'status',
    description: 'caca',
    async execute(client, message, args) {
        if(!args[0]) return message.channel('Uhh tell the name of the person bruh')
        const person = args.slice(0).join(" ") && args.shift().toLowerCase()
     

        let eightBall = [
            `${person} is sleeping`,
            `${person} is eating`,
            `${person} is playing games`,
            `${person} is doing hot girl sh*t`,
            `${person} is ordering food`,
            `${person} is listening to music`,
            `${person} is is taking a sh*t or pi*s`,
            `${person} is sitting`,
            `${person} is singing`,
        ];
        
        let answer = Math.floor(Math.random() * eightBall.length);
          
        await message.channel.send({
            embed: {
                color: `#00ddff`,
                description: `${eightBall[answer]}`,
            }
        });
    }
}