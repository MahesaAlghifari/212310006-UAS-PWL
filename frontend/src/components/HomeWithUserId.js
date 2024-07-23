// HomeWithUserId.js
import React from 'react';
import { useParams } from 'react-router-dom';
import LayoutInit from '../components/LayoutInit';
import Home from '../pages/home/Home'; // Sesuaikan dengan path ke file Home jika diperlukan

function HomeWithUserId() {
  return (
    <LayoutInit>
      <Home/> 
    </LayoutInit>
  );
}

export default HomeWithUserId;
