const config = {
	COOKIES: [
		{
			uid: 824887664, // Your in-game UID
			cookie: "",
			threshold: 170 // Stamina threshold to send notification
		},
		{
			uid: null, // null UID will be ignored from stamina check but will still be checked in daily
			cookie: "",
			threshold: 170
		}
	],
	STAMINA_CHECK: false, // Set to true to enable stamina check
	PERSISTENT_EXPEDITION: false, // Set to true if you want to keep sending notification
	PERSISTENT_STAMINA: false, // Set to true if you want to keep sending notification even if stamina is above the threshold and capped.
	CHECK_CODE_REDEEM: false, // Set to true to enable code check (THIS ONLY CHECK FOR NEW GLOBAL CODES)
	DISCORD_WEBHOOK: null, // Discord webhook URL
	TELEGRAM_CHAT_ID: null, // Telegram chat ID, use @getmyid_bot to get your chat ID
	TELEGRAM_TOKEN: null, // Telegram bot token
	TELEGRAM_DISABLE_NOTIFICATION: false, // Revoke notification (sound, vibration, etc.)
	CHECK_IN: "0 0 0 * * *", // Check in daily at 00:00:00
	EXPEDITION: "0 */30 * * * *", // Check expedition every 30 minutes
	STAMINA_CHECK_INTERVAL: "0 */30 * * * *", // Check stamina every 30 minutes
	DAILIES_REMINDER: "0 21 * * *", // Remind you to do your dailies at 21:00:00
	WEEKLIES_REMINDER: "0 21 * * 0" // Remind you to do your weeklies at 21:00:00 on Sunday
};

export default config;
