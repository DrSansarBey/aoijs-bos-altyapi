const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
  sharding: false, 
  shardAmount: 2, 
  mobile: true, 
  token: "TOKEN", 
  prefix: ["$getServerVar[prefix]"]})

bot.onMessage() 
bot.loadCommands(`./commands/`)
bot.command({name: "ping", 
code: `Pong! \`$ping\``})
//vaiableler 
bot.variables({prefix:"c!",}) 
