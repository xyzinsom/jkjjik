const fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
    let groups = Object.keys(await conn.groupFetchAllParticipating())
    m.reply(`_mengirim pesan siaran ke ${groups.length} grup_\nestimasi selesai ${groups.length * 1.5} detik`)
    for (let id of groups) {
        let bg = 'https://telegra.ph/file/21d685f7e82d1d69a5583.jpg'
        await conn.delay(1500)
        await conn.sendButtonLoc(id, await (await fetch(bg)).buffer(), text, wm, 'broadcast', 'broadcast')
    }
    m.reply('*selesai*')
}
handler.help = ['bcloc']
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(loc)$/i

handler.owner = true

module.exports = handler
