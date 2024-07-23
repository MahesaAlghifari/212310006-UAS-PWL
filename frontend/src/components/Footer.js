import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <p className="mt-4 text-center text-gray-300">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
