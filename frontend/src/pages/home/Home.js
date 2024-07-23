// Home.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Hero from './components/Hero';
import Card from './components/Card';
import Testimoni from './components/Testimoni';

export default function Home() {
  // Mendapatkan nilai parameter 'id' dari URL menggunakan useParams
  const { id } = useParams();

  // Mengonversi 'id' menjadi integer
  const userId = parseInt(id);

  return (
    <div>
      <Hero />
      <Card userId={userId} /> {/* Mengirim userId ke komponen Card */}
      <Testimoni />
    </div>
  );
}
