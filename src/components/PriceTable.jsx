// src/components/PricingTable.jsx
import React from 'react';

const PricingTable = ({ selectedPlan, setSelectedPlan }) => {
    const pricingOptions = [
      {
        name: "Starter",
        price: "$99/month",
        features: ["5 Users", "10GB Storage", "Basic Support"],
      },
      {
        name: "Professional",
        price: "$199/month",
        features: ["20 Users", "50GB Storage", "Priority Support"],
      },
      {
        name: "Enterprise",
        price: "$499/month",
        features: ["Unlimited Users", "1TB Storage", "24/7 Support"],
      },
    ];
  
    return (
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
            Pricing Plans
          </h2>
          <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            {pricingOptions.map((plan, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-6 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{plan.price}</p>
                </div>
                <button
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`!rounded-button cursor-pointer px-6 py-2 text-sm font-semibold transition whitespace-nowrap ${
                    selectedPlan === plan.name
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default PricingTable;