const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
    conn.sendContact(m.chat, `+62 838 6200 6229`, `FenrirXd`, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler