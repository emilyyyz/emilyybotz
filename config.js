/**Penjelasan: Untuk menggunakan script ini, kamu akan perlu mengganti nomor owner dan wm terlebih dahulu. Kamu juga harus memiliki api key tersebut dari kedua website ini https://api.botcahx.live dan https://api.betabotz.me. Setelah memiliki api key, kamu bisa menggantinya dengan menyalin key tersebut dari profilmu dan paste di variabel global.btc. Contohnya, global.btc = 'xzRhejka'. Setelah itu, kamu bisa melanjutkan dengan mengubah nomor owner dan wm.

Penjelasan selanjutnya adalah untuk mengisi variabel global.mongo, yang merupakan konfigurasi untuk menghubungkan dengan database MongoDB. Jika kamu tidak memerlukan koneksi database atau tidak memiliki akses ke MongoDB, maka variabel ini bisa diisi dengan nilai null atau tidak perlu diisi sama sekali. Namun, jika kamu ingin menggunakan database, variabel global.mongo harus diisi dengan nilai yang benar agar script bisa berjalan dengan baik.  
**/


global.owner = ['60199714550','60165669237','01115351387','01137759884']  
global.mods = ['60199714550'] 
global.prems = ['60199714550']
global.nameowner = 'Mars'
global.numberowner = '60199714550' 
global.mail = 'MarsBotz@support.com' 
global.dana = '60199714550'
global.pulsa = '60199714550'
global.gopay = '60199714550'
global.namebot = 'MarsBotz'
global.gc = 'https://chat.whatsapp.com/KGfJA0oNnrDIEwtr8To3y6'
global.web = 'https://github.com/OrewaHanz'
global.instagram = 'https://instagram.com/hanzoooox'
global.wm = '© MarsBotz'
global.watermark = wm
global.wm2 = '⫹⫺ MarsBotz'
global.wm3 = '© MarsBotz'
global.wm4 = '© MarsBotz'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made by'
global.author = 'MarsBotz'
global.alpiskey = 'YOUR_APIKEY_HERE' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'YOUR_APIKEY_HERE' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'YOUR_APIKEY_HERE' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.betabotz.me
global.APIs = { 
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'YOUR_APIKEY_HERE' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
