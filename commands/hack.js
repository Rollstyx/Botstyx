module.exports = {
    name: "hack",
    description: "hacks",
    async execute(client, message, args) {
        if(!args[0]) return message.channel('I cant hack a random person, tell me who should i hack!')
        const tohack = args.slice(0).join(" ") && args.shift().toLowerCase()

        let msg = await message.channel.send(`Hacking ${tohack}...`)
            msg.edit(`Email: ${tohack}@gmail.com
Password: ${tohack}lovescookies
Discord: ${tohack}
Password: ${tohack}IsGay
Youtube: ${tohack}DaGamer
Password: ${tohack}_is_a_SIMP
Spotify: ${tohack}_offical
Password: ${tohack}_watches_cocomelon
Snapchat: ${tohack}
Password: ${tohack}1_2_3_4
this is totally hashcat`);
    }
}