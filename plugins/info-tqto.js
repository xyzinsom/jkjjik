let handler = async (m, { conn, usedPrefix }) => {
    let tqto = `*BIG THANKS TO*

• Allah swt.
• My parents
• Putraa
• Skylarkaf
• Inuu
• Faix
• Asrori Amin
• and bot users`
m.reply(`${tqto}`)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler
