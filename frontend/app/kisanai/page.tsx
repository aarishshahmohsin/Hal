"use client";
import React, { useState, FormEvent } from "react";
import Nav from "../nav";
import Footer from "../footer";

export default function KisanAI() {
  const [silt, setSilt] = useState("");
  const [clay, setClay] = useState("");
  const [sand, setSand] = useState("");
  const [soilType, setSoilType] = useState("");
  const [suitableCrops, setSuitableCrops] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate inputs
    if (!silt || !clay || !sand) {
      alert("Please select all levels before predicting.");
      return; // Exit the function early
    }

    setIsLoading(true);

    const exampleList = convertToAPIFormat(silt, clay, sand);

    try {
      const response = await fetch(
        "https://halmodel-3.onrender.com/predict_soil_type",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ example_list: exampleList }),
        }
      );
      const data = await response.json();
      setSoilType(data.soil);
      setSuitableCrops(data.suitableCrops);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to predict soil type. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <main className="py-16 mt-14  text-black">
        <h1 className="text-center text-4xl font-bold mb-4 text-green-600">
          KisanAI
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <select
              id="silt"
              value={silt}
              onChange={(e) => setSilt(e.target.value)}
              className="border-2 border-gray-300 rounded p-2 w-full"
            >
              <option value="">Select Silt Level</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="mb-4">
            <select
              id="clay"
              value={clay}
              onChange={(e) => setClay(e.target.value)}
              className="border-2 border-gray-300 rounded p-2 w-full"
            >
              <option value="">Select Clay Level</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="mb-4">
            <select
              id="sand"
              value={sand}
              onChange={(e) => setSand(e.target.value)}
              className="border-2 border-gray-300 rounded p-2 w-full"
            >
              <option value="">Select Sand Level</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Predict Soil Type"}
          </button>
        </form>

        {soilType && (
          <div className="mt-6 text-center">
            <h2 className="text-lg font-semibold">
              Your soil type is{" "}
              <span className="text-green-600">{soilType}</span>
            </h2>
            {suitableCrops.length > 0 ? (
              <>
                <h3 className="font-semibold mt-4">Consider Planting :</h3>
                <div className="mt-4 grid grid-cols-3 gap-2 justify-between">
                  {suitableCrops.map((crop, index) => (
                    <div key={index} className="p-4 border rounded shadow-sm">
                      {crop}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p>No crops found.</p>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function convertToAPIFormat(silt: string, clay: string, sand: string) {
  return [silt, clay, sand].map((level) => {
    switch (level) {
      case "low":
        return 0.1;
      case "medium":
        return 0.5;
      case "high":
        return 0.9;
      default:
        return 0;
    }
  });
}
