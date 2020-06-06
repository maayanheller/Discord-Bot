const Discord = require("discord.js");
const client = new Discord.Client();
const _botToken = process.env.token;

client.on("ready", () => {
  console.log("I am ready!");
});



// Server Greeting

// ================================================================
// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
    member.guild.channels.get(':wave:welcome:wave:').send("Welcome"); 
});
// ================================================================



// Server Goodbye To A Member

// ================================================================
// Create an event listener for guild members that leaves
client.on("guildMemberRemove", member => {
  //Send the goodbye message to the goodbye channel
  const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");

  if (!channel) return;

  channel.send(`Farewell ${member}, we hope to see you soon!`);
});
// ================================================================

client.login(_botToken);