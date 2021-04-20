module.exports = {
    name: 'say',
    description: 'says the message',
    execute(client, message, args, Discord, cmd) {
        const sayMessage = args.join(" ");
        message.delete().catch(err => console.log(err));
        message.channel.send(sayMessage);
    }
}