let { getBuffer } = require('../lib/functions')

let handler = async(m, { conn, text }) => {
  if (!text) return m.reply(`Masukkan Urlnya`)
  await m.reply(`loading`)
  let lah = await getBuffer(`https://saipulanuar.ga/api/download/ssweb2?url=${text}`)
  await conn.sendFile(m.chat, lah, "hasil.jpg", `success`, m)
}
handler.command = /^(ssweb|sshp|sswebhp)$/i
handler.limit = true
handler.help = ["ssweb"]
handler.tags = ["internet"]

module.exports = handler