// src/components/ServiceCards.jsx
import React from 'react';

const ServiceCards = () => {
    const services = [
        {
          title: "Cloud Solutions",
          desc: "Scale your infrastructure with our enterprise-grade cloud services",
          image: "https://public.readdy.ai/ai/img_res/8a9d6a9782c32dbf5ebe8781043b7bf8.jpg",
        },
        {
          title: "Data Analytics",
          desc: "Transform raw data into actionable business insights",
          image: "https://public.readdy.ai/ai/img_res/36ba0d4e9e1bb38a77d0519182e3378b.jpg",
        },
        {
          title: "Cybersecurity",
          desc: "Protect your assets with advanced security solutions",
          image: "https://public.readdy.ai/ai/img_res/aa2cac2c6a57840ea4a2f713dd32102b.jpg",
        },
      ];
    
      return (
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export default ServiceCards;