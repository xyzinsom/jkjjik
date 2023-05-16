let handler = async (m, { conn }) => {   
    let txt = `Halo Kamu Mau Script Bot ini? Script Ini Di Jual dengan Harga 30k Contact wa.me/6283862006229`
     conn.reply(m.chat, txt, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


