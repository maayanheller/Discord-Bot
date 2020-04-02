const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});



// Server Greeting
// ================================================================
// Create an event listener for new guild members
client.on("guildMemberAdd", member => {
// Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(
    ch => ch.name === "New Members"
  );
// Do nothing if the channel wasn't found on this server
  if (!channel) return;
// Send the message, mentioning the member
  channel.send(`${member} Welcome to the server, you should introduce yourself so a team can use your skills`);
});
// ================================================================