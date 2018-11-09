const Discord = require("discord.js");
const baktash = new Discord.Client();
const prefix = "1";

Baktash.on("ready", async ready => {
    setInterval(function() {
        Baktash.channels.get("510523394102657039").send("**Baktash Credits Bot.**");
    }, 25);
});
setTimeout(function() {
    cya.destroy();
}, 360000);

Baktash.on("message", message => {
    if(message.content.startsWith(prefix + "say")) {
            if(message.author.id !== "331081268731052042");
        let args = message.content.split(" ").slice(1).join(" ");
            message.channel.send(args);
    }
});

baktash.login(process.env.BOT_TOKEN);
