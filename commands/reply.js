module.exports = {
    name: 'reply',
    description: "This is a reply command!",
    execute(client, message, args, Discord, cmd){
        const sayMessage = args.join(" ");
        message.channel.send('we know');
    }
}         