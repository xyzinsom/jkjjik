let handler = async (m, { conn, args }) => {
 let fs = require('fs')
let dataof = ["false"]
let dataon = ["true"]
if (!args[0]) throw `Masukkan query on/off`
if (args[0] == "on") {
 fs.writeFileSync('./settings/antiluat.json', JSON.stringify(dataon))
m.reply(`Sukses antiluar: Active`)
} else if (args[0] == "off") {
fs.writeFileSync('./settings/antiluat.json', JSON.stringify(dataof))
m.reply(`Sukses antiluar: Nonactive`)
}
}
handler.command = /^(antiluar)$/i
handler.owner = true

module.exports = handler