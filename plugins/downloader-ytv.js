let handler = async(m, { text, conn }) => {
  if (!text.includes('youtu')) throw 'Enter the youtube link'
  m.reply(wait)
  try {
    let ytLink = `https://yt-downloader.shironeki.repl.co/?url=${text}&filter=audioandvideo&quality=highestvideo&contenttype=audio/mp4`
    conn.sendMessage(m.chat, { video: { url: ytLink } }, { quoted: m })
  } catch (e) {
    m.reply(`Error internal server`)
  }
}
handler.help = ['ytmp4']
handler.tags = ['downloader']
handler.command = /^(ytmp4|ytvideo)$/i
handler.limit = true
handler.group = true
module.exports = handler
