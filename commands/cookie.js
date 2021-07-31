const Discord = require("discord.js")
module.exports = {
	name: 'cookie',
	description: 'sends a cookie to a user.',
	execute(message, args) {
		const cookie = new Discord.MessageEmbed()
		    .setColor('#D9A957')
			.setDescription(`${message.author} sent a freshly baked cookie to ${message.mentions.members.first()}`)
		message.channel.send(cookie);
	},
};
