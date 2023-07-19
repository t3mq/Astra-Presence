const Discord = require('discord.js-selfbot-v13');
const c = require('gradient-string');
const colors = require('colors');
const q = require('readline-sync')

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

const lang = (fr, en) => {
    switch(config.lang) {
        case "en":
            return en;
        case "fr":
            return fr;
        default: 
            return en;
    }
}

let Token = q.question('Enter a token: ');
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
    
    let Id = q.question(`${lang("Entrez un ID: ", "Enter an ID: ")}`)
    let Type = q.question(`${lang("Enter a type (PLAYING, STREAMING, LISTENING, WATCHING, COMPETING) [Full Maj]: ", "Entrer un type (PLAYING, STREAMING, LISTENING, WATCHING, COMPETING) [Full Maj]: ")}`);
    let Name = q.question(`${lang("Enter a name: ", "Entrer un nom: ")}`);
    let Details = q.question(`${lang("Enter a details: ", "Entrer un details: ")}`);
    let State = q.question(`${lang("Enter a state: ", "Entrer un state: ")}`);
    
    let LargeImg = q.question(`${lang("Enter a large image: ", "Entrer une large image: ")}`);

    const r = new Discord.RichPresence()
        .setApplicationId(Id)
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
