let handler = async(m, { text, conn }) => {
  if (!text.includes('youtu')) throw 'Enter the youtube link'
  m.reply(wait)
  try {
    let ytLink = `https://yt-downloader.shironeki.repl.co/?url=${text}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
    conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: m })
  } catch (e) {
    m.reply(`Error internal server`)
  }
}
handler.help = ['ytmp3']
handler.tags = ['downloader']
handler.command = /^(ytmp3|ytaudio)$/i
handler.limit = true
handler.group = true
module.exports = handler