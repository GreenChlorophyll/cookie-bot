const Discord = require("discord.js")
const prefix = ("=")
module.exports = {
	name: 'help',
	description: 'sends a help embed to a channel.',
	execute(message, args) {
		const cookiehelp = new Discord.MessageEmbed()
		    .setColor('#D9A957')
			.setTitle ('Help - BakeryBot')
			.setDescription('🍪 BakeryBot is a bot that can send cookies to users. The bot is currently in beta-testing, more commands will be added. \n \n **=**cookie @user - Sends the user a cookie. \n **=**muffin @user - Sends the user a muffin.  \n **=**help - Sends the help embed. \n **=**info - Sends the info embed. \n \n Currently hosted on `ServerDuck` ')
		message.channel.send(cookiehelp);
	},
};
