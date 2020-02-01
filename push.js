const push = require('web-push')

const vapidKeys = {
    publicKey: 'BJfV1tKvHWXE5TgZ1gHnVGo4FqYSFDbzEPRESd1KqgvsO5LNAUPDwU38eyXpv79xHFjQzi5Od_pauxIVYCnEELc',
    privateKey: 'kf6wTlz0tSBc7FQ9B54W6ZrVsox1fJtTnywZ8SeXAqc'
}

push.setVapidDetails('mailto:hehe@mailinator.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

let sub = {}

