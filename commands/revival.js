module.exports = {
    name: 'revival',
    description: 'revival',
    async execute(client, message, args) {
        message.delete().catch(err => console.log(err));
        message.channel.send('#REVIVE');
    }
}