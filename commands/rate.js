module.exports = {
    name: 'rate',
    description: 'rates the bot',
    async execute(client, message, args, Discord, cmd) {
        if (!args[0]) return message.channel.send("Please enter the rate amount!");

        if (!args[2]) return message.channel.send("Thanks for rating!");

        if(isNaN(args[0])) return message.channel.send("Please type a real number!");

        if(args[0] > 5) return message.channel.send("You can't rate more than 5");

        if(args[0] < 1) return message.channel.send("you cant rate less than 1");

    }
}