 module.exports = {
 config: {
	 name: "🙂",
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
 if (event.body && event.body.toLowerCase() === "🙂") {
 return message.reply({
 body: " 「 🧚‍♂️𝄞⋆⃝🧚‍♀️কা্ঁউ্ঁকে্ঁ ࿐য্ঁদি্ঁ࿐ স্ঁত্যি্ঁ ࿐ভা্ঁলো্ঁবা্ঁসো্ঁ🧚‍♀️𝄞⋆⃝🧚‍♂️\n🧚‍♀️𝄞⋆⃝🧚‍♂️তা্ঁহ্ঁলেঁ ࿐হা্ঁজা্ঁর্ঁ࿐ব্য্ঁস্ত্ঁতা্ঁর্ঁ࿐মা্ঁঝে্ঁও্ঁ🧚‍♂️𝄞⋆⃝🧚‍♀️\n🧚‍♂️𝄞⋆⃝🧚‍♀️তা্ঁকে্ঁ ࿐এ্ঁক্ঁটু্ঁ স্ঁম্ঁয়্ঁ দি্ঁও্ঁ🧚‍♀️𝄞⋆⃝🧚‍♂️ \n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/1YZp1oK.mp4")
 });
 }
 }
}
