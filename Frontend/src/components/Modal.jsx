import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex justify-center items-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full transform transition-all duration-300">
        <div className="relative p-6">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-3xl transition-colors">&times;</button>
          {children}
        </div>
      </div>
    </div>
  );
}