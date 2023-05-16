let fetch = require('node-fetch')
let { getBuffer } = require('../lib/functions')

let handler = async(m, { conn, usedPrefix, command, args, text }) => {
    if (!text.includes('instagram')) throw 'Masukkan link instagram'
    await m.reply(wait)
    let kimi = await (await fetch(`https://sh.xznsenpai.xyz/download?url=${text}`)).json()
   hlah = await getBuffer(kimi.url[0].url)
   await conn.sendFile(m.chat, hlah, 'tiktok.mp4', kimi.meta.title, m)
}
handler.help = ['idgl']
handler.tags = ['downloader']
handler.limit = true
handler.group = true

handler.command = /^(ig|igdl|instagram)$/i

module.exports = handler