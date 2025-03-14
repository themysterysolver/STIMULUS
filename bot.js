require('dotenv').config();
console.log("Bot token:", process.env.TOKEN ? "Loaded" : "Not loaded!");

const fs=require('fs');

const {Client,GatewayIntentBits,Partials}=require('discord.js');
const client=new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ],
    partials: [Partials.Channel]
});
let motivation=[];
try{
    motivation=fs.readFileSync('quote.txt','utf-8').split('\n');
    // console.log(motivation);
}
catch(err){
    console.log(err.message);
}

client.once('ready',()=>{
    console.log(`Bot is ready ${client.user.tag}`);
});

try{
    client.on('messageCreate',(message)=>{
        if (message.author.bot) return;
        if(message.content==='!motivate'){
            const quote=motivation[Math.floor(Math.random()*motivation.length)];
            message.channel.send(quote);
        }
        else if(message.content==='!help'){
            message.channel.send(`
        📌 **Available Commands:**
        • \`!motivate\` → Get a random motivational quote
        • \`!help\` → Show this help menu
        `);
        }
    });
}
catch(err){
    console.log(err.message);
}

client.login(process.env.TOKEN);