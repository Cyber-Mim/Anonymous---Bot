const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"Tokodori",// Convert By Goatbot Tokodori 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬',
      gender: '𝗠𝗔𝗟𝗘',
      whatsapp: '01709045888',
      address: '𝗧𝗔𝗥𝗔𝗞𝗔𝗡𝗗𝗜, 𝗦𝗔𝗥𝗜𝗦𝗛𝗔𝗕𝗔𝗥𝗜, 𝗝𝗔𝗠𝗔𝗟𝗣𝗨𝗥',
      facebookLink: 'https://www.facebook.com/profile.php?id=100001741442385',
      nick: '𝗝𝗢𝗬-𝗕𝗢𝗧'
    };

    const bold = 'https://i.imgur.com/BC9Qr14.jpeg'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_pic.jpg');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗡𝗧𝗜𝗢𝗡:🧾
𝗡𝗔𝗠𝗘: ${ownerInfo.name}
𝗚𝗘𝗡𝗗𝗘𝗥: ${ownerInfo.gender}
𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣: ${ownerInfo.whatsapp}
𝗔𝗗𝗗𝗥𝗘𝗦𝗦: ${ownerInfo.address}
𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: ${ownerInfo.facebookLink}
𝗡𝗜𝗖𝗞𝗡𝗔𝗠𝗘: ${ownerInfo.nick}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
