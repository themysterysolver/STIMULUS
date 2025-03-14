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
- `.gitignore` is used to ignore the files that should not be added to the **git**.
- ***NOTE:*** that `.env` is not a extension like *.txt,.py*.
---

#### .config()

- used to load *env var* from `.env` into `process.env` ***object***
- This obj allows to acces *config values*. 

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

---

### client.once()
- event listener in discord.js whihc executes only once
- listen only once to that event after that it won't listen to that event.
- useful when some events that ***SHOULD run only one time***.
     - `ready` when bot is sucessfully logs in
     - `reconnecting`
     - `warn`
- event listener is removed after use
- runs only once
---

### client.on()

- used for recurring event
- runs multiple time
- action listener is not removed

---

#### 🆚 Difference Between `client.once()` and `client.on()`

| Feature                     | `client.once()` | `client.on()` |
|-----------------------------|---------------|-------------|
| **Runs only once?**          | ✅ Yes         | ❌ No (Runs every time the event occurs) |
| **Removes listener after execution?** | ✅ Yes  | ❌ No |
| **Best for...**              | One-time events (e.g., `ready`) | Recurring events (e.g., `messageCreate`) |

---

### clinet.user.tag

- return `username` and `discriminator` of your bot.
```
MotivationBot#5678
```
- we also have,
    - username
    - discriminator:4digit no
    - id:unique ud for each bot

---

### messageCreate event

- runs every time ***user or bot** sends a message
- it has `message` object whuch has info like
    - `message.author` sender info
        - `.bot` 
             - `True` bot
             - human
    - `message.content`: text content
    - `message.channel`:channel where msg sent
    - `message.guild`: the server where it was sent,DM =>null
    - `.createdAt`:timeStamp
    - `.mentions` user,roles,channels in the message
    - `.attachement`:List of files or image sattached to the msg
---

### client.login(process.env.token)
- logs the bot into discord
---

### railway.app

- It is a ***cloud deployment platform***
- It allows you t0 
     - host applications
     - bots
     - db with *minimal setup*
- supports many lang
- easy deploment with github
- they need `package.json` to detect that project is **Node.js**.
- the **start** tels which file to run
- to download all dependecies
```
npm install
```
- also we have used `.gitignore` to hide our `.env` file,thus it won't be on github.
- so here we shoudl create `TOKEN` in ***varaible** section of our project.
---
      
