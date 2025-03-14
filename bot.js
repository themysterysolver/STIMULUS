require('dotenv').config();
const fs=require('fs');

const {Client,GatewayIntentBits}=require('discord.js');
const client=new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

try{
    let motivation=fs.readFileSync('quote.txt','utf-8').split('\n');
    console.log(motivation);
}
catch(err){
    console.log(err.message);
}

client.once('ready',()=>{
    console.log(`Bot is ready ${client.user.tag}`);
});

try{
    client.on('messageCreate',(message)=>{
        if(message.content==='!motivate'){
            const quote=quotes[Math.floor(Math.random()*motivation.length)];
            message.channel.send(quote);
        }
    });
}
catch(err){
    console.log(err.message);
}
