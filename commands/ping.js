module.exports = {
    name: "ping",
    description: 'oing',
    execute(client, message, args, Discord) {
        message.channel.send('Finding bots ping...').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`Botstyx s ping is ${ping}ms, wow`);
        })
    }
}