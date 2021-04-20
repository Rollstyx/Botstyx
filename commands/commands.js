'use strict';

module.exports = {
    name: 'commands',
    description: 'commands',
    execute(client, message, args) {
    

        message.channel.send({
            embed: {
                color: `#00ddff`,
                description: `FUN COMMANDS
                 8ball, hack, image, invade, mood, rate, say

                MUSIC COMMANDS
                 play, stop, skip, pause, unpaused
                 
                OTHER
                avatar, calculate, clear, mcserver, ping, weather`,
                
            }
        });
    }
}