const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "event",
  description: "Create a simple event",
  usage: "<time> <channel> <prize>",
  category: "fun",
  async execute (client, message, args)  {
    if (!args[0]) return message.channel.send(`You did not specify your time!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")         
    )
      return message.channel.send(
        `You did not use the correct formatting for the time!`
      );
    if (isNaN(args[0][0])) return message.channel.send(`That is not a number!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `I could not find that channel in the guild!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`No event specified!`);
    message.channel.send(`*Event created in ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`New event!`)
      .setDescription(
        `The user ${message.author} is hosting a event for called  **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);

  },
};