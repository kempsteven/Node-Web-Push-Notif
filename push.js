const push = require('web-push')

const vapidKeys = {
    publicKey: 'BJfV1tKvHWXE5TgZ1gHnVGo4FqYSFDbzEPRESd1KqgvsO5LNAUPDwU38eyXpv79xHFjQzi5Od_pauxIVYCnEELc',
    privateKey: 'kf6wTlz0tSBc7FQ9B54W6ZrVsox1fJtTnywZ8SeXAqc'
}

push.setVapidDetails('mailto:hehe@mailinator.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dl8ZZC4nsH0:APA91bFTwl2FxqADMV9qdmyN1gV69VD0G2A5x9hLU_Tr73IkaVRTWufNyWwwXcadfkFMFyn62nM5szvYtwnsGK2ShlujzCdLWmaCMPyiUr8LkwJSC3dTJ6bUQGSOcFhDn1ZT70BQbItG",
    "expirationTime": null,
    "keys": {
        "p256dh": "BCTKhTAOtKuuDdbhTvXE8VtCF_YzEuyLv03X9UN75wuaLZyeXyJ1D3kx86lJw1e6cY5sDWIvwdwQRgSusTvklNw",
        "auth": "jNxGyaYnYVn7DLD8T2ADjw"
    }
}

