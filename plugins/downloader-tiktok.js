let fetch = require('node-fetch')
let { getBuffer } = require('../lib/functions')

let handler = async(m, { conn, usedPrefix, command, args, text }) => {
    if (!text.includes('tiktok.com')) throw 'Masukkan link tiktoknya'
    await m.reply(wait)
    let kimi = await (await fetch(`https://api.botcahx.biz.id/api/dowloader/tikok?url=${text}&apikey=74e9f5ed`)).json()
   //hlah = await getBuffer(kimi.result.video)
   await conn.sendFile(m.chat, kimi.result.video, 'tiktok.mp4', `*TIKTOK DOWNLOADER*\n\n• Username: ${kimi.result.username}\n• Description: ${kimi.result.description}\nby Hitori Bocchi`, m)
}
handler.help = ['tiktoknowm']
handler.tags = ['downloader']
handler.limit = true
//handler.group = true

handler.command = /^(tiktoknowm|tiktok|tt)$/i

module.exports = handler