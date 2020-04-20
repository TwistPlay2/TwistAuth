module.exports = {

	/**
	 * Instructions on how to get this: https://redd.it/40zgse
	 */
	yourID: "473526373575819264",

	setupCMD: "!kasdfasdfasdfasdfasdfvczxcvn)",

	/**
	 * Delete the 'setupCMD' command after it is ran. Set to 'true' for the command message to be deleted
	 */
	deleteSetupCMD: true,

	initialMessage: `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`,

	embedMessage: `
	**Авторизация:**
	Ваша задача просто нажать на реакцию снизу, но все же советую прочитать этот небольшой текст.
	Это сделано для того, чтобы не заходили боты или какие-то еще вещи, которые могут дудосить и тд.

	Так же, после подтверждения, прошу вас прочесть правила в текстовом канале #❮🚫❯⥤rules. Чтобы у нас с вами потом не было проблем. Мы рассчитываем на адекватность, дружелюбность каждого участника на сервере.
	`,
	
	/**
	 * Must set this if "embed" is set to true
	 */
	embedFooter: "Подтверждения",
	
	roles: ["confirmed"],

	/**
	 * For custom emojis, provide the name of the emoji
	 */
	reactions: ["crosspeepo"],

	/**
	 * Set to "true" if you want all roles to be in a single embed
	 */
	embed: true,

	/**
	 * Set the embed color if the "embed" variable is et to "true"
	 * Format:
	 * 
	 * #dd9323
	 */
	embedColor: "#8b00ff",

	/**
	 * Set to "true" if you want to set a thumbnail in the embed
	 */
	embedThumbnail: true,

	/**
	 * The link for the embed thumbnail if "embedThumbnail" is set to true
	 */
	embedThumbnailLink: "https://sun9-40.userapi.com/c206728/v206728499/8f166/hreTmG7O_CQ.jpg",

	/**
	 * You"ll have to set this up yourself! Read more below:
	 * Please do not commit this token to the public if you contributed to this repository
	 * or host your code anywhere online. Giving someone your bot's token is the equivalent
	 * to giving someone the keys to your house and walking away!
	 * 
	 * https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token
	 */
	botToken: "token"
};
