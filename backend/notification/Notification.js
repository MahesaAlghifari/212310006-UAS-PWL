const express = require('express');
const router = express.Router();
const webPush = require('web-push');

// Kunci VAPID
const vapidKeys = {
  publicKey: 'BM-WZP5goq0EUeaPn1qM4odMaYNUAYtkO6g6p2g-qNL4dZesrZwJi1Sx27tb63NKF8R4Mkt4-M4pctzkx7lCbVc',
  privateKey: '1Um5Xv6Lq36gl_ZGglF8RVGXldcEdnsMRfxaVKvQ5iI'
};

webPush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// Rute untuk menerima subscription dari client dan mengirim notifikasi
router.post('/subscribe', (req, res) => {
  const subscription = req.body;

  const payload = JSON.stringify({
    title: 'Hello',
    body: 'World',
    icon: '/icon.png',
    url: 'https://yourwebsite.com'
  });

  webPush.sendNotification(subscription, payload)
    .then(response => {
      console.log('Push sent:', response);
      res.status(200).json({ message: 'Push sent successfully.' });
    })
    .catch(error => {
      console.error('Error sending push:', error);
      res.status(500).json({ error: 'Failed to send push notification.' });
    });
});

module.exports = router;
