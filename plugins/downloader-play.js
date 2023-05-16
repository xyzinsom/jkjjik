let { youtubeSearch } = require('@bochilteam/scraper')
let { getBuffer } = require('../lib/functions')
let handler = async(m, { text, conn }) => {
let teks = m.quoted && m.quoted.text ? m.quoted.text : text
if (!teks) throw 'Input Query'
  let vid = (await youtubeSearch(teks)).video[0]
  if (!vid) throw 'Video/Audio Not Found'
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
  m.reply(wait)
  let ytLink = `https://yt-downloader.shironeki.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  let capt = `• Id : ${videoId}\n• Title : ${title}\n• Published : ${publishedTime}\n• Duration : ${durationH}\n• Views: ${viewH}\n• Url : ${url}\n• Description : ${description}`
  let pe = await getBuffer(thumbnail)
  let msg = await conn.sendMessageModify(m.chat, capt, m, { largeThumb: true, thumbnail: pe, title: 'Youtube Play Music' })
  if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download dibatalkan*\n\n_Durasi lagu terlalu panjang..._` }, { quoted: msg })
  conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg', fileName: `${title}.mp3` }, { quoted: m })
}

handler.command = /^(play|music)$/i
handler.help = ["music"]
handler.tags = ["downloader"]
handler.limit = true
handler.group = true
module.exports = handler