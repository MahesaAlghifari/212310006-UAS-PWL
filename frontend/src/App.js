import React, { useEffect } from 'react';
import './App.css';
import BaseRoute from './apps/BaseRoute';
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(function (registration) {
          console.log('Service Worker registered with scope:', registration.scope);

          // Minta izin untuk notifikasi
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              console.log('Notification permission granted.');
              // Mendapatkan subscription
              subscribeUserToPush(registration);
            } else {
              console.error('Notification permission denied.');
            }
          });
        })
        .catch(function (error) {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  const subscribeUserToPush = (registration) => {
    const applicationServerKey = urlBase64ToUint8Array('YOUR_PUBLIC_VAPID_KEY'); // Ganti dengan kunci publik VAPID Anda
    registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    })
      .then(function (subscription) {
        console.log('User is subscribed:', subscription);
        // Kirim subscription ke server
        sendSubscriptionToServer(subscription);
      })
      .catch(function (error) {
        console.error('Failed to subscribe the user: ', error);
      });
  };

  const urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  const sendSubscriptionToServer = (subscription) => {
    // Kirim subscription ke server Anda
    fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(subscription)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to send subscription to server');
        }
        return response.json();
      })
      .then(data => {
        console.log('Subscription sent to server:', data);
      })
      .catch(error => {
        console.error('Error sending subscription to server:', error);
      });
  };

  return (
    <BrowserRouter>
      <BaseRoute />
    </BrowserRouter>
  );
}

export default App;
