
const Discord = require("discord.js");
const robot = new Discord.Client();
const fs =require("fs")
var p = "!"

robot.on('ready', () => {
    robot.user.setActivity('loading..',{ type: "PLAYING" })
    robot.user.setStatus('dnd')
    setTimeout(status1, 6000)
    console.log('ready launched bot...')
});


function status1() {
    robot.user.setActivity('dragon nest mobile',{ type: "PLAYING" })
    robot.user.setStatus('online')
	
}




robot.on('guildMemberAdd', (member) => {
	member.addRole('468063445590343681')
	
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
		    if(!message.member.roles.some(r=>["Модератор", "Стример"].includes(r.name)) )
		    if(message.author.id !== '405258156063850497')
return message.reply("Прости, но ты не можешь использовать это!")
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


		robot.on('message', message => {
    if(message.content.startsWith(p + 'delete')) {
                   if(!message.member.roles.some(r=>["Модератор", "Стример"].includes(r.name)) )
		   if(message.author.id !== '292178755760422915')
      return message.reply("Прости, но ты не можешь использовать это!")
        message.delete()
        let delmes = message.content.slice((p + 'delete').length);
        var result = 'Успешно удалено' + delmes + ' сообщений'
        message.channel.bulkDelete(delmes)
        message.channel.send(result).then((res) => {
        setTimeout(()=>{res.delete()},5000)
        console.log('Кто-то удалил сообщения!')
        })
    }
});
		
	
		robot.on('message', message => {
	if(message.content.startsWith(p + 'avatar')) {
		const embed = new Discord.RichEmbed()
		.setTitle('Аватар пользователя:')
            .setColor('RANDOM')
		 .setImage(message.mentions.users.first().avatarURL)
		 message.channel.send({embed})
		console.log('Кому то понадобился аватар')
	}
});
		

robot.on('message', message => {
	if(message.content.startsWith(p + 'nick')) {
var mentions1 = message.mentions
const vtes = message.content.slice(28);
		if(!message.member.roles.some(r=>["Модератор", "Стример"].includes(r.name)) )
if(message.author.id !== '292178755760422915')
			     return message.reply("У тебя мало прав на использование этой команды, дружок!")
message.delete()
message.mentions.members.first().setNickname(vtes)
console.log(vtes) 

    }});

robot.on("guildMemberRemove", member => {
    console.log(`${member.displayName} покинул ${member.guild.name}.`)
if(member.guild.id === "459053493492121600"){
robot.channels.get('459211347050102785').send(`${member.displayName} ушел от великого стримера`);
	}
});


robot.on('guildMemberAdd', (member) => {
    console.log(`${member.displayName} вступил в ${member.guild.name}.`)
if(member.guild.id === "459053493492121600"){
robot.channels.get('459211347050102785').send(`Приветствуем нового члена нашей огромной дружной семьи - ${member.displayName}`);
	}
});


robot.on('message', message => {
    if(message.content.startsWith(p + 'help')) {
	message.channel.send('К командам бота обращаться к Чайку')
	    console.log(`${message.author.displayName} прописал команду help`)
        };
});


robot.on("guildMemberRemove", member => {
    console.log(`${member.displayName} покинул ${member.guild.name}.`)
if(member.guild.id === "437629164770820097"){
robot.channels.get('437629164770820099').send(`${member.displayName} покинул нашу семью`);
	}
});


robot.on('message', message => {
            if(message.content.startsWith(p + 'rand')) {
            message.delete()
var randomNumber = Math.floor(Math.random() * 1000) + 0;
		    
function getRandomArbitary(min, max)
{


return Math.floor(Math.random() * 1000) + 0
}
message.channel.send(randomNumber)
 
		    
		    
}});
//Запускает интервал
robot.on('message', message => {
  if (message.content === (p + 'start')) {
try {	  
message.channel.send("@everyone, доброго времени суток, до мирового босса осталось 10 минут");
	//var tclear = 
	    setInterval(function() {
		message.channel.send("@everyone, доброго времени суток, до мирового босса осталось 10 минут");
		
		}, 86400000)
	
	} catch (err) {
message.channel.send('Произошла ошибка')
	console.log("Поймал маслину")
	}
		    //86400000(24 часа)
    }
}); 
//Удалит интервал сверху 
robot.on('message', message => {
  if (message.content === (p + 'clear')) {
	  message.reply('Отключил оповещения');
setTimeout(function() {
  clearInterval(tclear);
 
}, 5000);
	  
  }
});
	
	
robot.login(process.env.BOT_TOKEN);



