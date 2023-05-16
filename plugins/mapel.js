let handler = async(m, { conn, usedPrefix, command, text }) => {
if (text == "senin") {
await m.reply(`SENIN
Character Building - 07:00 - 07:45
ASWAJA - 07:45 - 08:30
PENJAS - 08:30 - 10:15
MTK - 10:15 - 11:45
IPAS IPS - 12:15 - 13:45`)
} else if (text == "selasa") {
await m.reply(`SELASA
B.JAWA - 07:00 - 07:45
PKN - 07:45 - 08:30
INFORMATIKA - 08:30 - 10:15
B.INGGRIS - 10:15 - 11:45
PENDIDIKAN AGAMA - 12:15 - 13:45`)
} else if (text == "rabu") {
await m.reply(`RABU
PKN - 07:00 - 07:45
SENI RUPA - 07:45 - 08:30
B.INDONESIA - 08:30 - 10:15
IPAS KIMIA - 10:15 - 11:45
DASAR TJKT - 12:15 - 13:45`)
} else if (text == "kamis") {
await m.reply(`KAMIS
B.INDONESIA - 07:00 - 08:30
IPAS FISIKA - 08:30 - 10:15
B.JAWA - 10:15 - 11:00
PENDIDIKAN AGAMA - 11:00 - 11:45
DASAR TJKT - 12:15 - 13:00
SENI RUPA - 13:00 - 13:45`)
} else if (text == "jumat") {
await m.reply(`JUMAT
DASAR TJKT - 07:00 - 09:15
INFORMATIKA - 09:30 - 11:00`)
} else if (text == "sabtu") {
await m.reply(`SABTU
B.INGGRIS - 07:00 - 08:30
DASAR TJKT - 08:30 - 10:15
SEJARAH - 10:15 - 11:45
MTK - 12:15 - 13:45`)
} else {
const sections = [{title: `Silahkan Pilih Hari`,rows: [{title: `SENIN`, rowId: `${usedPrefix+command} senin`},{title: `SELASA`, rowId: `${usedPrefix+command} selasa`},{title: `RABU`, rowId: `${usedPrefix+command} rabu`},{title: `KAMIS`, rowId: `${usedPrefix+command} kamis`},{title: `JUMAT`, rowId: `${usedPrefix+command} jumat`},{title: `SABTU`, rowId: `${usedPrefix+command} sabtu`}]}]
const listMessage = {text: `Jadwal Mata Pelajaran`,footer: wm,buttonText: `SELECT DAY`,sections}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
}
}

handler.command = /^(mapel|matapelajaran|pelajaran)$/i
handler.help = [`mapel`]

module.exports = handler