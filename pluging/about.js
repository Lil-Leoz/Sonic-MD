const fs = require('fs');
const path = require('path');
const config = require('../config');
const { cmd, commands } = require('../command');

// Function to get a random image from the 'assets' folder
function getRandomImage() {
    const assetsFolder = path.join(__dirname, '../Unique_assets'); // Path to the assets folder
    const files = fs.readdirSync(assetsFolder);  // Read all files in the assets folder
    const imageFiles = files.filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i)); // Filter image files (jpg, jpeg, png, gif)
    
    // If there are no images in the folder, return a default image
    if (imageFiles.length === 0) {
        return 'https://raw.githubusercontent.com/Lil-Leoz/bot-help/refs/heads/main/IMG-20250407-WA0004.jpg';  // Default image URL
    }
    
    // Select a random image from the filtered list
    const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
    
    // Return the full path of the selected image
    return path.join(assetsFolder, randomImage);
}

cmd({
    pattern: "about",
    react: "👑",
    desc: "Get bot owner description and information.",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let aboutInfo = `
🌟 *About the Bot and Developer* 🌟

---

👤 *Hello, ${pushname}!*  
I am *Sonic-MD Bot*, a Premium Whatsapp Bot

---

🧑‍💻 *Developer Information:*
- *Name:* Lil LEOZ
- *Age:* 15+
- *Location:* Sri Lanka

---

🚀 *About the Bot:*
- *Bot Name:* Sonic-MD
- *Purpose:* A bot is a computer program that automates tasks, often found online, performing actions like searching or interacting with users
- *Features:* It offers a variety of commands for entertainment, utility, and educational purposes, such as downloading media, converting files, and more!

---


🔗 *Connect with Developer:*
- *Whatsapp*:94705319505)

---

💡 *Thank you for using Sonic-MD!*  
I hope this bot helps you learn, explore, and make your experience smoother. Your feedback is always appreciated!

> *Powered by Lil Leoz*
`;

        // Get a random image from the assets folder
        const randomImagePath = getRandomImage();
        
        // Send the random image and the about info message
        await conn.sendMessage(from, { image: { url: randomImagePath }, caption: aboutInfo }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
