const push = require('web-push')

const vapidKeys = {
    publicKey: 'BJfV1tKvHWXE5TgZ1gHnVGo4FqYSFDbzEPRESd1KqgvsO5LNAUPDwU38eyXpv79xHFjQzi5Od_pauxIVYCnEELc',
    privateKey: 'kf6wTlz0tSBc7FQ9B54W6ZrVsox1fJtTnywZ8SeXAqc'
}

push.setVapidDetails('mailto:hehe@mailinator.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

const sub = { "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABeNTL2-XwtMdwTHfUJv5B61AaVZoYLivqxe2HnlNZzSWrAaenF10VReWGurMSIzl_UUFGVH-UwiOTQHNZNtj79UbtHqWj2h3ze6dr7nLfSzCVg8d3UGfez0535blgluDrpknAijVIBwrnY5j-2yAivgV6ZHPUiWdR9wFHI42X0mDWX_To", "keys": { "auth": "7sHMgoKYvgTwdmvADoiPoA", "p256dh": "BD2rkCYKxBjNWRrAOhVGrH6UbPdqNFPiJoqMhDWTxtNg2RG3v6RpNugFJ3LlidZoZrylkl95LOH0SIzCuleWDhE" } }

push.sendNotification(sub, 'test message aaaaaa')