let fetch = require('node-fetch')
let { getBuffer } = require('../lib/functions')

let handler = async(m, { conn, usedPrefix, command, args, text }) => {
    if (!text.includes('tiktok.com')) throw 'Masukkan link tiktoknya'
    await m.reply(wait)
    let kimi = await (await fetch(`https://api.shironeki.repl.co/api/download/tiktokmp3?url=${text}`)).json()
   hlah = await getBuffer(kimi.result)
   await conn.sendMessage(m.chat, { audio: hlah, mimetype: 'audio/mpeg', fileName: `${command}.mp3` }, {quoted: m})
}
handler.help = ['tiktokaudio']
handler.tags = ['downloader']
handler.limit = true
handler.group = true

handler.command = /^(tiktokaudio|tiktokmp3|ttaudio|tiktoklagu|ttmp3)$/i

module.exports = handler