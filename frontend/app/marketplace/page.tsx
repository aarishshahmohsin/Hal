"use client";
import React, { useState, useEffect, CSSProperties } from "react";
import { fetchData } from "./data";
import { MarketModal } from "./marketModal";
import Nav from "../nav";
import Footer from "../footer";
import { ClipLoader, MoonLoader, ScaleLoader } from "react-spinners";

interface MarketplaceItem {
  thumbnail: string;
  name: string;
  price_inr: number;
  image: string;
  type: string;
}

interface ModalAction {
  type: "buy" | "rent";
  item: MarketplaceItem;
}

const override: CSSProperties = {
  marginTop: "50px",
  // display: "block",
  margin: "auto",
  borderColor: "green",
};

const MarketplacePage: React.FC = () => {
  const [items, setItems] = useState<MarketplaceItem[]>([]);
  const [currentPage, paginate] = useState(1);
  const [itemsPerPage] = useState(8);
  const [modalInfo, setModalInfo] = useState<ModalAction | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      const query = `
  query {
  marketplace(number: ${150}) {
    type
    name
    price_inr
    image
    thumbnail
  }
}

  `;

      try {
        const response = await fetch("http://localhost:8080/graphql/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        // console.log(data.data.videos);
        // setVideos(data.data.videos)
        setItems(data.data.marketplace);
        setLoading(false);
        // setLoading(false);
        // if (items.length < 1) {
        //   const data = await fetchData();
        //   setItems(data.data.marketplace);
        // }
        // setLoading(false);
      } catch (error) {
        // setLoading(false);
        console.error("Error fetching videos:", error);
        const data = await fetchData();
        setItems(data.data.marketplace);
        setLoading(false);
        // setItems(data.data.marketplace);
      }
    }
    fetchItems();
  }, []);

  const openModal = (item: MarketplaceItem, action: "buy" | "rent") => {
    setModalInfo({ type: action, item });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-black">
        <Nav />
        <div className="bg-gray-100 h-40"/>
        <main className="py-12 px-4 bg-gray-100">
          <MoonLoader
            color={"green"}
            loading={loading}
            cssOverride={override}
            // size={45}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </main>
        <div className="bg-gray-100 h-40"/>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Nav />
      <main className="py-12 mt-8 px-4 bg-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {items.length > 0 && currentItems.map(
              (item, index) =>
                item && (
                  <div
                    key={index}
                    className="cursor-pointer p-4 shadow-lg rounded-lg"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-full rounded mb-2"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <h3 className="font-bold">{item.name}</h3>
                    <p>₹{item.price_inr}</p>
                    <div className="flex justify-between mt-2">
                      <button
                        onClick={() => openModal(item, "buy")}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition-colors duration-150"
                      >
                        Buy
                      </button>
                      <button
                        onClick={() => openModal(item, "rent")}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-150"
                      >
                        Rent
                      </button>
                    </div>
                  </div>
                )
            )}
        </div>
        <div className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(items.length / itemsPerPage) },
            (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-4 py-2 rounded-lg ${
                  currentPage === i + 1
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
        {modalInfo && (
          <MarketModal
            item={modalInfo.item}
            onClose={() => setModalInfo(null)}
            action={modalInfo.type}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MarketplacePage;
