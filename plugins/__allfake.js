let fs = require('fs')
let fetch = require('node-fetch')
const moment = require('moment-timezone')

let handler = m => m
handler.all = async function (m) {
let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'
try {
pp = await this.profilePictureUrl(m.sender, 'image')
} catch (e) {
} finally {
  
global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
global.shiro = pickRandom(["https://telegra.ph/file/c7c0f3d605938ac63579d.jpg","https://telegra.ph/file/ffd1c4d6f396bfb17c40f.jpg","https://telegra.ph/file/76b1b24acf44db1c85475.jpg","https://telegra.ph/file/b1314e52a29fa6811e385.jpg","https://telegra.ph/file/810c4f788bb36c9b12e0a.jpg"])
// let yaa = ['https://telegra.ph/file/3e8bb8e6c08c00fd0ad33.jpg','https://telegra.ph/file/f9adfbc7be858f5b0d365.jpg','https://telegra.ph/file/4839217e5fd8b3681b83d.jpg','https://telegra.ph/file/09003312ef8c7f95ef207.jpg','https://telegra.ph/file/d7162faf34007c415e2a6.jpg','https://telegra.ph/file/c7494db13a69bd07c4469.jpg','https://telegra.ph/file/5544203f452785cb1c02f.jpg','https://telegra.ph/file/5fbd5d2fc8540a3a97c96.jpg','https://telegra.ph/file/1f735f5d0f6c270270fd2.jpg','https://telegra.ph/file/a0f485ad413e3ad6e6530.jpg','https://telegra.ph/file/2f86c60cb9a89b4e21f3f.jpg']
global.settingnomorluar = false
global.yttajathumb = "https://telegra.ph/file/85632b40c6fe0868b94dc.jpg"
global.fetch = require('node-fetch')
const _uptime = process.uptime() * 1000
global.u = await conn.clockString(_uptime)
global.kontak2 = [
[owner[0], await this.getName(owner[0] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'anosvoaldigoad167@gmail.com', true],
[owner[1], await this.getName(owner[0] + '@s.whatsapp.net'), 'ʙᴏᴛ', 'asroriamin124@gmail.com', true],
]
global.ucapan = ucapan()
global.ephemeral = '86400'
global.ephemeral2 = '60'
global.adReply = {
contextInfo: {externalAdReply: { showAdAttribution: true, title: `Simple WhatsApp Bot`, body: null, mediaType: 1, previewType: 0, renderLargerThumbnail: true, thumbnail: yttajathumb.buffer, thumbnailUrl: yttajathumb, sourceUrl: ""}}}
global.fakefb = {contextInfo: {externalAdReply: {showAdAttribution: true,mediaUrl: 'https://instagram.com',mediaType: 'VIDEO',description: null,title: "Hitori Gotou Bot",thumbnailUrl: yttajathumb}}}

// Fake 🤥
global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 3, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
global.fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./src/logo.jpg'), thumbnail: require('fs').readFileSync('./src/logo.jpg'),sendEphemeral: true}}}

}
}

module.exports = handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}