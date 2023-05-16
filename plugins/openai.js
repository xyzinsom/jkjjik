const { Configuration, OpenAIApi } = require("openai");
const fetch = require('node-fetch');

let handler = async(m, { conn, usedPrefix, text }) => {
    if (!text) throw `Kamu mau nanya apa`
    try {
      let p = await (await fetch(`https://sh.xznsenpai.xyz/openai?text=${text}`)).json()
      await conn.sendMessage(m.chat, { text: p.trim() }, { quoted: m })
    } catch (e) {
      m.reply(`Error internal server`)
    }
}
handler.command = /^(ask|ai)$/i
handler.limit = true
handler.help = ["ask", "ai"]
handler.tags = ["ai"]
module.exports = handler