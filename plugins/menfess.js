let handler = async(m, { conn, usedPrefix, command, text }) => {
    const desc = `Cara penggunaan menfess nomor|nama|pesan, example: \n\n${usedPrefix + command} 6288227248988|Crush|Hai my crush >//<`.trim()
    text1 = text.split('|')[0]
    text2 = text.split('|')[1]
    text3 = text.split('|')[2]
    if(!text) throw desc
    if(!text1.startsWith('628')) throw desc
    if(!text2) throw desc
    if(!text3) throw desc
    
    teks = "Hai kamu menerima pesan Rahasia nih"
    teks += "\n\nDari : " + `*${text2}*`
    teks += "\nIsi Pesan : " + `*${text3}*`
    conn.sendMessage(text1 + "@s.whatsapp.net",{
	        text: teks,
            footer: 'Hitori Bocchi Bot',
            buttons: [
              { buttonId: `.menfesschat ${m.sender.split("@")[0]}`, buttonText: { displayText: 'Ajak Chat' }, type: 1 }
              ],
            headerType: 1,
            withTag : true 
	        });
    m.reply("*Done mengirim pesan menfess kepada " + text1 + "*")
}

handler.command = /^(menfess)$/i
handler.private = true
handler.tags = ['anonymous']
handler.help = ['menfess']
module.exports = handler


//Wm By Kimimaru
//github: https://github.com/K1mimaru