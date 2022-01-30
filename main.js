const  Discord = require('discord.js');
const config = require('./config.json');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents, shards: "auto" });




const fs = require('fs');
const message = require('./events/guild/messageCreate');

 
client.commands = new Discord.Collection();
 client.events = new Discord.Collection();
 

 ['event_handler'].forEach(handler =>{
   require(`./handlers/${handler}`)(client, Discord);
 })

 client.once('ready', async() => {
     const servers = await client.guilds.cache.size;
     const a = undefined + 0;
     const memberCount = await client.guilds.cache.reduce((a,b) => a+b.memberCount, 0);
  const arrayOfStatus = [
      `My Prefix: t!`,
      `I am you'r daily helper!`,
      `Helping ${memberCount} People!`,
      `Talk with me in Talky-chat`,
  ];

  let index = 0;
  setInterval(() => {
      if (index === arrayOfStatus.length) index = 0;
      const status = arrayOfStatus[index];
      client.user.setActivity(status, {type: "WATCHING"});
      index++;
  }, 7000)

});
try {
client.on("messageCreate", async message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`)
  if (message.content.match(prefixMention)) {
    return await message.channel.send({ content: `${message.author}`, embeds: [
      new Discord.MessageEmbed()
      .setTitle(`Hello, I am you'r daily helper!`)
      .setDescription(`Note: My api might not give the response you want.\n\n`
      + `Chat with me in ( #│・💬talky-chat )`)
      .setFooter(`You'r Daily Helper`)
      .setTimestamp()
      .setColor('GREEN')
    ]}).then(console.log(`${message.author.tag} Mentioned me! :)`)).catch((e) => {
      console.log('error....')
    });
  }
})
} catch(e) {
    console.log(e);
}

   
try {
client.login(config.TOKEN);
}catch(e) {
    console.log(e);
    }

