const Discord = require("discord.js");
const robot = new Discord.Client();
const fs =require("fs")
var p = "!"

robot.on('ready', () => {
    robot.user.setActivity('Вход в Дискорд аккаунт',{ type: "PLAYING" })
    robot.user.setStatus('dnd')
    setTimeout(status1, 20000)
    console.log('login....')
});

function status1() {
    robot.user.setActivity('Аниме',{ type: "WATCHING" })
    robot.user.setStatus('online')
};




 robot.on('guildMemberAdd', (member) => {
      member.addRole('459206853822251018')
                                                     
 });


robot.on('message', message => {
  if (message.content === (p + 'ping')) {
message.channel.send('Pinging...').then(sent => {
    sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
	console.log('Кто то узнал пинг бота!')
    });
  }
});

robot.on('message', message => {
            if(message.content.startsWith(p + 'say')) {
                   message.delete()
                   let say = message.content.slice((p + 'say').length);
                      message.channel.send(say);
                     console.log("ко-ко повторюшка")
	    }
	    });


robot.on("guildCreate", guild => {
	console.log(`Меня добавили на сервер: ${guild.name} (id: ${guild.id}). На этом сервере ${guild.memberCount} участников!`);
});

robot.on("guildDelete", guild => {
	console.log(`Меня выгнали из: ${guild.name} (id: ${guild.id})`);
});




robot.login(process.env.BOT_TOKEN);



