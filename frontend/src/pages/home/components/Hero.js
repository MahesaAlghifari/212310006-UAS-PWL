import { useState } from 'react';

const navigation = [
  { name: 'Menu', href: '#' },
  { name: 'Reservation', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Hero() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg')`, // Ganti URL dengan gambar latar belakang sesuai
      }}
    >
      <div className="relative isolate px-6 lg:px-8 bg-black bg-opacity-70">
        <div className="mx-auto max-w-2xl py-24 sm:py-48 text-white"> {/* Mengubah warna teks menjadi putih */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20"> {/* Mengubah warna teks menjadi abu-abu muda */}
              Discover our delicious menu and latest offers.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Explore now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl"> 
              Progressive Web Apps
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Item-Based Filtering adalah salah satu metode dalam sistem rekomendasi yang berfokus pada kesamaan antar item daripada kesamaan antar pengguna.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#menu"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Menu
              </a>
              <a href="#reservation" className="text-sm font-semibold leading-6 text-gray-100"> {/* Mengubah warna teks menjadi abu-abu muda */}
                Make a Reservation <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
