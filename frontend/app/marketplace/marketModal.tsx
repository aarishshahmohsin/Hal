"use client";
import { useRef, useEffect } from "react";

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
  action: "buy" | "rent";
}

export const MarketModal: React.FC<MarketModalProps> = ({
  item,
  onClose,
  action,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Function to handle the purchase
  const handlePurchase = () => {
    alert(
      `Purchase successful! You have bought ${item.name} for ₹${item.price_inr}.`
    );
    onClose(); // Close the modal after purchase
  };

  // Function to handle the rent
  const handleRent = () => {
    const rentPrice = item.price_inr * 0.2; // 20% of the original price
    alert(
      `Rent successful! You have rented ${item.name} for ₹${rentPrice.toFixed(
        2
      )}.`
    );
    onClose(); // Close the modal after renting
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div
        className="bg-white p-4 rounded-lg max-w-xl max-h-full overflow-auto"
        ref={modalRef}
      >
        <div className="flex flex-col items-center">
          <img
            src={item.thumbnail}
            alt={item.name}
            className="w-full h-auto rounded mb-2"
            style={{ maxWidth: "500px", objectFit: "contain" }} // Adjust styling as needed
          />
          <h2 className="text-lg font-bold text-black">{item.name}</h2>
          <p className="text-black">Price: ₹{item.price_inr}</p>
          <p>Type: {item.type}</p>
          {/* Display the pay button only if the action is 'buy' */}
          {action === "buy" && (
            <button
              onClick={handlePurchase}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors duration-150"
            >
              Pay ₹{item.price_inr}
            </button>
          )}
          {action === "rent" && (
            <button
              onClick={handleRent}
              className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-500 transition-colors duration-150"
            >
              Rent ₹{(item.price_inr * 0.2).toFixed(2)}
            </button>
          )}
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
