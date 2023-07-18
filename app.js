const Discord = require('discord.js-selfbot-v13');
const prompt = require('prompt-sync')();
const c = require('gradient-string');
const colors = require('colors');

const client = new Discord.Client({
    readyStatus: false,
    checkUpdate: false,
});
const config = require('./config')

const color = () => {
    switch (config.color) {
      default:
        return ["#3c00ff", "#07d6fa"]
    }
}

let Token = prompt('Enter a token: ');
client.login(Token);

client.on('ready', () => {
    console.clear()

    console.log(c(color())(`

    ▄████████    ▄████████     ███        ▄████████    ▄████████         ▄████████ ▀█████████▄  
    ███    ███   ███    ███ ▀█████████▄   ███    ███   ███    ███        ███    ███   ███    ███ 
    ███    ███   ███    █▀     ▀███▀▀██   ███    ███   ███    ███        ███    █▀    ███    ███ 
    ███    ███   ███            ███   ▀  ▄███▄▄▄▄██▀   ███    ███        ███         ▄███▄▄▄██▀  
  ▀███████████ ▀███████████     ███     ▀▀███▀▀▀▀▀   ▀███████████      ▀███████████ ▀▀███▀▀▀██▄  
    ███    ███          ███     ███     ▀███████████   ███    ███               ███   ███    ██▄ 
    ███    ███    ▄█    ███     ███       ███    ███   ███    ███         ▄█    ███   ███    ███ 
    ███    █▀   ▄████████▀     ▄████▀     ███    ███   ███    █▀        ▄████████▀  ▄█████████▀  
                                          ███    ███                                             
    `))
    console.log(`                                           •----------•\n`.bold.black)

    let Type = prompt('Enter a type (PLAYING, STREAMING, LISTENING, WATCHING, COMPETING) [Full Maj]: ');
    let Name = prompt('Enter a name: ');
    let Details = prompt('Enter a details: ');
    let State = prompt('Enter a state: ');
    
    let LargeImg = prompt('Enter a large image: ');

    const r = new Discord.RichPresence()
        .setApplicationId("1123612385421312052")
        .setType(Type)
        .setName(Name)
        .setDetails(Details)
        .setState(State)
        .setAssetsLargeImage(LargeImg)

        client.user.setActivity(r)
        client.user.setPresence({status: 'dnd'})

    console.log(`\n                                           •----------•\n`.bold.black)
    console.log(`Connected as ${client.user.tag}`.bold.green)
});