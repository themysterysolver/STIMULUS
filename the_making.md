### LET'S CREATE A DISOCRD BOT YOOOOOOOO!
## STEP-1: Packages
```
npm install discord.js dotenv fs
```
## STEP-2:Discord setup
- create tooken and save it in `.env`
---

#### what is .env/dotenv?

- It is a `node.js` package manager
-  It is saved as `.env`
- Used to store sensitive information
    - API keys
    - DB credentials
- we define *environemnetal varaiable* in this format
```
KEY=VALUE
```
>**NOTE**:this shoudln't be commited to git xoz it has sensitive private info

>Thus we use `.gitignore`
- ***NOTE:*** that `.env` is not a extension like *.txt,.py*.
---

#### .config()

- used to load *env var* from `.env` into `process.env` ***object***
- This obj allows to acces *confi values*. 

---
### discord.js

- `client` is a class
- `GatewayIntentBits` is a constant
    - `.Guilds` ***which server*** it is in
    - `.GuildMessages` helps ***recieveing msg***,without it bot is blind it won't recieve any message.
        - rcv msg from txt channel
    - `.MessageContent` without this but with GuildMessages bot knows msg is sent but not what it says.**It became a privilaged intent**
- `{}` is an object
- **Intents** tel bot which *event* bot listen in server.Without them sometimes they ***won't recieve*** some types of event. 