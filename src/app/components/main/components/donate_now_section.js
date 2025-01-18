"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const DonateNowFormSection = () => {
  const [amount, setAmount] = useState(5);

  const handleSuccess = (details) => {
    alert(`Thank you, ${details.payer.name.given_name}, for your donation!`);
    console.log("Transaction Details:", details);
  };

  const handleError = (error) => {
    console.error("PayPal Donation Error:", error);
    alert("An error occurred during the transaction. Please try again.");
  };

  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!paypalClientId) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Support Us</h2>
            <p className="mt-2 text-sm text-gray-600">
              Your donation helps us continue our mission
            </p>
          </div>

          <div className="mt-8">
            <div className="text-center">
              <p className="text-red-600">
                PayPal Client ID is not provided. Please contact the website
                administrator.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Support Us</h2>
          <p className="mt-2 text-sm text-gray-600">
            Your donation helps us continue our mission
          </p>
        </div>

        <div className="mt-8">
          <PayPalScriptProvider
            options={{
              clientId: paypalClientId,
            }}
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Enter your donation amount (USD):
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
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
                    onChange={(e) => setAmount(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 pl-7 pr-12 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                    placeholder="0.00"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500 sm:text-sm">USD</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <PayPalButtons
                  style={{
                    layout: "vertical",
                    color: "blue",
                    shape: "pill",
                    label: "donate",
                  }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: amount,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    const details = await actions.order.capture();
                    handleSuccess(details);
                  }}
                  onError={(err) => handleError(err)}
                />
              </div>
            </div>
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default DonateNowFormSection;
