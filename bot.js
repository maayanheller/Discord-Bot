const Discord = require("discord.js");
const client = new Discord.Client();
this._botToken;

client.on("ready", () => {
  console.log("I am ready!");
});



// Server Greeting

// ================================================================
// Create an event listener for new guild members
client.on("guildMemberAdd", member => {
// Send the message to Welcome channel on the server:
  const channel = member.guild.channels.cache.find(
    ch => ch.name === "Welcome"
  );
  if (!channel) return;

  channel.send(`Welcome to the server, ${member}, go introduce yourself and show your skills`);
});
// ================================================================



// Server Goodbye To A Member

// ================================================================
// Create an event listener for guild members that leaves
client.on("guildMemberRemove", member => {
  //Send the goodbye message to the goodbye channel
  const channel = member.guild.channels.cache.find(channel => channel.name === "Welcome");

  if (!channel) return;

  channel.send(`Farewell ${member}, we hope to see you soon!`);
});
// ================================================================