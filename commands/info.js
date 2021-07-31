const Discord = require("discord.js")
module.exports = {
	name: 'info',
	description: 'sends a info embed to a channel.',
	execute(message, args) {
		const cookieinfo = new Discord.MessageEmbed()
		    .setColor('#D9A957')
			.setTitle ('Info - BakeryBot')
			.setDescription('🍪 BakeryBot is a bot that can send cookies to users. The bot is currently in beta-testing, more commands will be added. \n \n Host: `ServerDuck` \n Verison: `0.2.1`')
		message.channel.send(cookieinfo);
	},
};
