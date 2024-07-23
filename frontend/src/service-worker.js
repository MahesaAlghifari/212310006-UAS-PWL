/* eslint-disable no-restricted-globals */

// Service worker ini bisa disesuaikan!
// Lihat https://developers.google.com/web/tools/workbox/modules
// untuk daftar modul Workbox yang tersedia, atau tambahkan
// kode lain yang Anda inginkan.
// Anda juga bisa menghapus file ini jika tidak ingin menggunakan
// service worker, dan langkah build Workbox akan dilewati.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';

// Mengklaim kontrol dari client saat ini segera setelah service worker aktif.
clientsClaim();

// Melakukan precache terhadap semua aset yang dihasilkan oleh proses build.
// URL mereka disuntikkan ke dalam variabel manifest di bawah ini.
// Variabel ini harus ada di suatu tempat dalam file service worker Anda,
// meskipun Anda memutuskan untuk tidak menggunakan precaching. Lihat https://cra.link/PWA
precacheAndRoute(self.__WB_MANIFEST);

// Mengatur routing gaya App Shell, sehingga semua permintaan navigasi
// dipenuhi dengan shell index.html. Pelajari lebih lanjut di
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Mengembalikan false untuk mengecualikan permintaan dari dipenuhi oleh index.html.
  ({ request, url }) => {
    // Jika ini bukan navigasi, lewati.
    if (request.mode !== 'navigate') {
      return false;
    }

    // Jika URL ini dimulai dengan /_, lewati.
    if (url.pathname.startsWith('/_')) {
      return false;
    }

    // Jika ini terlihat seperti URL untuk sumber daya, karena mengandung
    // ekstensi file, lewati.
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }

    // Mengembalikan true untuk menandakan bahwa kita ingin menggunakan handler.
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// Contoh route caching runtime untuk permintaan yang tidak ditangani oleh
// precache, dalam kasus ini permintaan .png dari asal yang sama seperti di public/
registerRoute(
  // Tambahkan ekstensi file atau kriteria routing lainnya sesuai kebutuhan.
  ({ url }) => url.origin === self.location.origin && /\.(jpe?g|png|svg|ico)$/i.test(url.pathname), // Sesuaikan strategi ini sesuai kebutuhan, misalnya, dengan mengubah ke CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Pastikan setelah cache runtime ini mencapai ukuran maksimum,
      // gambar yang paling jarang digunakan dihapus.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

// Caching font dari Google Fonts
registerRoute(({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com', new NetworkFirst({
  cacheName: 'fonts',
  plugins: [
    new ExpirationPlugin({
      maxAgeSeconds: 60 * 60 * 24 * 365,
      maxEntries: 30
    })
  ]
}));

// Menambahkan event listener untuk proses instalasi service worker
self.addEventListener('install', function (event) {
  console.log("SW Install");

  // Promis asinkron untuk menyelesaikan instalasi setelah beberapa waktu
  const asyncInstall = new Promise(function (resolve) {
    console.log("Waiting install to finish...");
    setTimeout(resolve, 5000);
  })

  event.waitUntil(asyncInstall);
});

// Menambahkan event listener untuk aktivasi service worker
self.addEventListener('activate', function (event) {
  console.log("SW Activate");
});

// Ini memungkinkan web app untuk memicu skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

