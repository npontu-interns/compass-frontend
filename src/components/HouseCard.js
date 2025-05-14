// components/HouseCard.js
import React from "react";

const HouseCard = () => {
  // Property data now lives inside the component
  const properties = [
    {
      id: 1,
      isExclusive: true,
      isLimitedTime: true,
      addedTime: "today",
      imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      price: "GHC280,000",
      title: "Modern 2 Bedroom Apartment",
      location: "Lartebiokorshie, Accra",
      bedrooms: 2,
      bathrooms: 1,
      features: [
        "Stylish and contemporary design",
        "Balcony with city views",
        "Premium location in Cantonments"
      ],
      agent: {
        name: "Ghana Homes",
        phone: "+233200000000"
      }
    },
    {
      id: 2,
      isExclusive: true,
      isLimitedTime: true,
      addedTime: "yesterday",
      imageUrl: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
      price: "GHC415,000",
      title: "Beautiful 3 Bedroom Bungalow",
      location: "East Legon, Accra",
      bedrooms: 3,
      bathrooms: 2,
      features: [
        "Well-presented 1970s detached bungalow",
        "Spacious open layout",
        "Swimming pool and garden"
      ],
      agent: {
        name: "Ghana Homes",
        phone: "+233200000000"
      }
    },
    {
      id: 3,
      isExclusive: false,
      isLimitedTime: false,
      addedTime: "today",
      imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
      price: "GHC750,000",
      title: "Luxury 4 Bedroom Villa",
      location: "Cherry Tree Road, Kent",
      bedrooms: 4,
      bathrooms: 3,
      features: [
        "High-end finishes throughout",
        "Communal pool and gym",
        "Modern electric heating"
      ],
      agent: {
        name: "Leaserbolt",
        phone: "+233200000000"
      }
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Badges */}
            <div className="flex justify-between items-start p-4">
              <div className="space-x-2">
                {property.isExclusive && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                    Only With Us
                  </span>
                )}
                {property.isLimitedTime && (
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                    Limited Time
                  </span>
                )}
              </div>
              <span className="text-gray-500 text-sm">
                {property.addedTime === "today" ? "Added today" : "Added yesterday"}
              </span>
            </div>

            {/* Image */}
            <img
              className="w-full h-48 object-cover"
              src={property.imageUrl}
              alt={property.title}
            />

            {/* Price */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">{property.price}</h3>
            </div>

            {/* Title + Location */}
            <div className="px-4">
              <h2 className="text-lg font-semibold">{property.title}</h2>
              <p className="text-gray-600 text-sm">{property.location}</p>
            </div>

            {/* Bed/Bath */}
            <div className="flex gap-4 p-4 text-sm">
              <span>Bed: {property.bedrooms}</span>
              <span>Bath: {property.bathrooms}</span>
            </div>

            {/* Features */}
            <ul className="px-4 pb-4 space-y-1 text-sm text-gray-700">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-1">·</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Agent */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold">{property.agent.name}</p>
                  <p className="text-xs text-gray-500">{property.agent.phone}</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
                  Email agent
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HouseCard;