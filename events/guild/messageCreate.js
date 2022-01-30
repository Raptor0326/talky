const { MessageEmbed, MessageButton } = require('discord.js');

const config = require('../../config.json');

const fetch = require('node-fetch');



module.exports = async (Discord, client, message) => {

  try {

  const member = message.member
    
    const prefix = config.PREFIX;
    
    if(message.author.bot || message.channel.type === 'dm') return;
 try {
    if(message.channel.id == "923660997569417236") {
      fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&key=h8kjcmj8wWd01S0KPoMn6Wp6B`)
      .then(response => response.json())
      .then(data => {
          message.channel.send({ content: `${data.response}` })
      })
      .catch((error) => {
          message.channel.send({ content: "Couldn't fetch response!" })
      })
  }
}catch(e) {
  console.log(e);
}

 try {
    if(message.channel.id == "923692251325014017") {
      fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&key=h8kjcmj8wWd01S0KPoMn6Wp6B`)
      .then(response => response.json())
      .then(data => {
          message.channel.send({ content: data.response })
      })
      .catch((error) => {
          message.channel.send({ content: "Couldn't fetch response!" })
      })
  }
}catch(e) {
  console.log(e);
}


    
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

   

  
    try{
      if(!command) return
      command.execute(message, args, cmd, client, Discord);
  } catch (err){
    
    const embedä = new MessageEmbed()
    .setColor('#a82200')
    .setTitle('<:raptor:870335464295526420> There was an error trying to execute command!')
    .setDescription('__you can find commands by the command: __')
  message.channel.send({ embeds: [embedä] });
      console.log(err);
      
  }
  }catch (e) {
      console.log(e);
  }
  
  }