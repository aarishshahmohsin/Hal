"use client";
import React from "react";

interface MarketplaceItem {
  thumbnail: string;
  name: string;
  price_inr: number;
  image: string;
  type: string;
}

interface MarketModalProps {
  item: MarketplaceItem;
  onClose: () => void;
}

export const MarketModal: React.FC<MarketModalProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-xl max-h-full overflow-auto">
        <div className="flex flex-col items-center">
        <img
  src={item.thumbnail}
  alt={item.name}
  className="w-full rounded mb-2"
  style={{ height: '200px', objectFit: 'cover' }} 
/>
          <h2 className="text-lg font-bold text-black">{item.name}</h2>
          <p className="text-black">Price: ₹{item.price_inr}</p>
          <p>Type: {item.type}</p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
