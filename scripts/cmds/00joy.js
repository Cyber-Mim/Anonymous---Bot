 module.exports = {
 config: {
	 name: "00joy",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "Joy","joy"," জয়","〲Nʌtoĸɓʌj卝জ্ঁয়্ঁ一ཐི༏ཋྀ࿐") {
 return message.reply({
 body: "     「জয় বস এখন কাজে বিজি আছেন যা বলার আমাকে বলতে পারেন🤗😚」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/BC9Qr14.jpeg")
 });
 }
 }
}
