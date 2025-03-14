requestAnimationFrame('dotenv').config();
const fs=require('fs');
const {Client,GatewayIntentBits}=require('discord.js');
const client=new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
