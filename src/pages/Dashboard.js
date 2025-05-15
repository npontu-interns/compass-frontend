// src/pages/Dashboard.js
import React from "react";
import HouseCard from "../components/HouseCard"; // Import the new HouseCard component

const dummyProperties = [ // Renamed to avoid conflict and clarify it's dummy data
  {
    id: "dummy-1", // Use strings for IDs for flexibility
    isExclusive: true,
    isLimitedTime: true,
    addedTime: "today",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    ],
    price: 280000, // Changed to number for consistent formatting
    priceString: "GHC280,000", // Keep original string if needed for display flexibility
    title: "Modern 2 Bedroom Apartment",
    location: "Lartebiokorshie, Accra",
    address: "123 Main St, Lartebiokorshie, Accra", // Added address for consistency
    bedrooms: 2,
    bathrooms: 1,
    squareFootage: 85, // Changed to number
    area: "85 m²", // Keep original string for display flexibility
    description: "Stylish and contemporary design with a balcony offering city views. Located in a premium area of Cantonments, offering easy access to amenities.",
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
    id: "dummy-2",
    isExclusive: true,
    isLimitedTime: true,
    addedTime: "yesterday",
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
      "https://images.unsplash.com/photo-1599423300746-b62533397364"
    ],
    price: 415000,
    priceString: "GHC415,000",
    title: "Beautiful 3 Bedroom Bungalow",
    location: "East Legon, Accra",
    address: "456 Oak Ave, East Legon, Accra",
    bedrooms: 3,
    bathrooms: 2,
    squareFootage: 120,
    area: "120 m²",
    description: "A well-presented 1970s detached bungalow featuring a spacious open layout, perfect for family living. Includes a refreshing swimming pool and a lush garden.",
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
    id: "dummy-3",
    isExclusive: false,
    isLimitedTime: false,
    addedTime: "today",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
    ],
    price: 750000,
    priceString: "GHC750,000",
    title: "Luxury 4 Bedroom Villa",
    location: "Cherry Tree Road, Kent",
    address: "789 Cherry Tree Rd, Kent",
    bedrooms: 4,
    bathrooms: 3,
    squareFootage: 200,
    area: "200 m²",
    description: "Experience luxury in this villa with high-end finishes throughout. Enjoy communal pool and gym access, complemented by modern electric heating.",
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

// This component will receive 'listings' as a prop
const Dashboard = ({ listings = [] }) => { // Default to empty array if no listings provided
  // Combine dummy data with actual listings for display
  const allListings = [...dummyProperties, ...listings];

  return (
    <section className="container mx-auto px-4 py-8"> {/* Adjusted padding */}
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Available Properties</h2> {/* Larger title */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap */}
        {allListings.length > 0 ? (
          allListings.map((property) => (
            <HouseCard key={property.id} property={property} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">No properties available yet. Be the first to list one!</p>
        )}
      </div>
    </section>
  );
};

export default Dashboard;