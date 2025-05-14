// components/HouseCard.js
import React from "react";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    isExclusive: true,
    isLimitedTime: true,
    addedTime: "today",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    ],
    price: "GHC280,000",
    title: "Modern 2 Bedroom Apartment",
    location: "Lartebiokorshie, Accra",
    bedrooms: 2,
    bathrooms: 1,
    area: "85 m²",
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
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
      "https://images.unsplash.com/photo-1599423300746-b62533397364"
    ],
    price: "GHC415,000",
    title: "Beautiful 3 Bedroom Bungalow",
    location: "East Legon, Accra",
    bedrooms: 3,
    bathrooms: 2,
    area: "120 m²",
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
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
    ],
    price: "GHC750,000",
    title: "Luxury 4 Bedroom Villa",
    location: "Cherry Tree Road, Kent",
    bedrooms: 4,
    bathrooms: 3,
    area: "200 m²",
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

const HouseCard = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Featured Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Link
            key={property.id}
            to={`/property/${property.id}`}
            state={{ property }}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
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

            <img
              className="w-full h-48 object-cover"
              src={property.images[0]}
              alt={property.title}
            />

            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">{property.price}</h3>
              <h2 className="text-lg font-semibold">{property.title}</h2>
              <p className="text-gray-600 text-sm">{property.location}</p>
            </div>

            <div className="flex gap-4 p-4 text-sm">
              <span>Bed: {property.bedrooms}</span>
              <span>Bath: {property.bathrooms}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HouseCard;
