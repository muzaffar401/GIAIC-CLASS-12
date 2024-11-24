"use client";
import { useState, useEffect } from "react";

type Rates = {
  [key: string]: number; // Keys are strings, values are numbers
};

type CoinLayerResponse = {
  rates: Rates;
};

export default function CoinMarket() {
  const API_KEY = "69248c7024deda1858b0f7b057565109";
  const [data, setData] = useState<CoinLayerResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setLoading(true); // Set loading to true on refresh
    fetch(`https://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted: CoinLayerResponse) => {
        console.log("JSON Converted Data:", jsonConverted);
        setData(jsonConverted);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false)); // Stop loading after fetching data
  }, []);

  const filteredRates = Object.entries(data?.rates || {}).filter(([coin]) =>
    coin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Crypto Dashboard</h1>
        <p className="text-gray-400">Live Cryptocurrency Prices</p>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for a cryptocurrency..."
          className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Loading or Content */}
      {loading ? (
        <p className="text-center">Loading cryptocurrencies...</p>
      ) : filteredRates.length > 0 || searchQuery === "" ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredRates.map(([coin, price]) => (
            <div
              key={coin}
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center"
            >
              <h2 className="text-xl font-semibold">{coin}</h2>
              <p className="text-green-400 text-lg font-mono">
                ${price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No cryptocurrencies found.</p>
      )}
    </div>
  );
}
