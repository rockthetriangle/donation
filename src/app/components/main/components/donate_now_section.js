"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";

const DonateNowFormSection = () => {
  const [amount, setAmount] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const predefinedAmounts = [5, 10, 25, 50, 100];

  const handleDonation = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (err) {
      console.error("Donation error:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-8 pt-8 pb-6 text-center space-y-4">
          <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Make a Donation</h2>
          <p className="text-gray-600 text-sm">
            Help us make a difference in the world
          </p>
        </div>

        <div className="px-8 pb-8">
          <form onSubmit={handleDonation} className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Select amount
              </label>
              <div className="flex flex-wrap justify-center items-center gap-2">
                {predefinedAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset)}
                    className={`min-w-28 px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                      amount === preset
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-200 hover:border-blue-200 hover:bg-blue-50"
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>

              <div className="relative mt-4">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  step="0.01"
                  min="1.00"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="block w-full rounded-lg border-gray-200 border pl-7 pr-12 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter custom amount"
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 sm:text-sm">USD</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center py-3 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed space-x-2"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5" />
                  <span>Donate Now</span>
                </>
              )}
            </button>

            {error && (
              <div className="text-center text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateNowFormSection;
