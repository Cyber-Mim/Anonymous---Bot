 module.exports = {
  config: {
    name: "🙂",
    aliases: ["lm10"],
    version: "1.0",
    author: "Otineyyyy your dadddy👾😉",
    countDown: 5,
    role: 0,
    shortDescription: "send you pic of messi",
    longDescription: "",
    category: "𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗",
    guide: "{pn}"
  },

  onStart: async function ({ message }) {
   var link = [ "https://i.imgur.com/1YZp1oK.mp4",
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: '「🧚‍♂️𝄞⋆⃝🧚‍♀️কা্ঁউ্ঁকে্ঁ ࿐য্ঁদি্ঁ࿐ স্ঁত্যি্ঁ ࿐ভা্ঁলো্ঁবা্ঁসো্ঁ🧚‍♀️𝄞⋆⃝🧚‍♂️\n🧚‍♀️𝄞⋆⃝🧚‍♂️তা্ঁহ্ঁলেঁ ࿐হা্ঁজা্ঁর্ঁ࿐ব্য্ঁস্ত্ঁতা্ঁর্ঁ࿐মা্ঁঝে্ঁও্ঁ🧚‍♂️𝄞⋆⃝🧚‍♀️\n🧚‍♂️𝄞⋆⃝🧚‍♀️তা্ঁকে্ঁ ࿐এ্ঁক্ঁটু্ঁ স্ঁম্ঁয়্ঁ দি্ঁও্ঁ🧚‍♀️𝄞⋆⃝🧚‍♂️ \n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬」',attachment: await global.utils.getStreamFromURL(img)
})
}
     }
