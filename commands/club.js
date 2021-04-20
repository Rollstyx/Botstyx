module.exports = {
    name: 'cname',
    description: `Game: 8ball, returns a random message to user`,
    execute: async function (client, message, args) {
        const name = args.slice(0).join(" ") && args.shift().toLowerCase()
 
        if(!args[1]) return message.reply("Please set the name");
 
        await message.channel.send({
            embed: {
                color: `#00ddff`,
                description: `Club name set to ${name}`,
            }
        });
    }
    
};