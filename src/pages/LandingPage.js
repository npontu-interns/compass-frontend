// src/pages/LandingPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Header from '../components/Navbar'; // REMOVED
// import Footer from '../components/footer'; // REMOVED
import HouseCard from '../components/HouseCard';

// Your dummy properties (moved from the old Dashboard.js)
const dummyProperties = [
  {
    id: "dummy-1",
    isExclusive: true,
    isLimitedTime: true,
    addedTime: "today",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    ],
    price: 280000,
    priceString: "GHC280,000",
    title: "Modern 2 Bedroom Apartment",
    location: "Lartebiokorshie, Accra",
    address: "123 Main St, Lartebiokorshie, Accra",
    bedrooms: 2,
    bathrooms: 1,
    squareFootage: 85,
    description: "Stylish and contemporary design with a balcony offering city views. Located in a premium area of Cantonments, offering easy access to amenities.",
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
    description: "A well-presented 1970s detached bungalow featuring a spacious open layout, perfect for family living. Includes a refreshing swimming pool and a lush garden.",
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
    description: "Experience luxury in this villa with high-end finishes throughout. Enjoy communal pool and gym access, complemented by modern electric heating.",
    agent: {
      name: "Leaserbolt",
      phone: "+233200000000"
    }
  }
];

const ghanaRegions = [
  'Greater Accra', 'Ashanti', 'Eastern', 'Western', 'Central',
  'Volta', 'Northern', 'Upper East', 'Upper West', 'Bono East',
  'Ahafo', 'Savannah', 'North East', 'Oti', 'Bono', 'Western North',
];

const propertyTypes = ['House', 'Apartment', 'Condo'];
const bedroomOptions = [1, 2, 3, 4, '4+'];
const bathroomOptions = [1, 2, 3, '3+'];
const amenityOptions = ['Pool', 'Backyard', 'Balcony', 'Garage'];

// LandingPage now accepts a 'listings' prop from App.js
const LandingPage = ({ listings = [] }) => {
  const navigate = useNavigate();

  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [amenities, setAmenities] = useState([]);

  const handleAmenityChange = (event) => {
    const { value, checked } = event.target;
    setAmenities((prev) =>
      checked ? [...prev, value] : prev.filter((a) => a !== value)
    );
  };

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (location) params.append('location', location);
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    if (bedrooms) params.append('bedrooms', bedrooms);
    if (bathrooms) params.append('bathrooms', bathrooms);
    if (propertyType) params.append('propertyType', propertyType);
    if (amenities.length > 0) params.append('amenities', amenities.join(','));

    navigate(`/search-results?${params.toString()}`);
  };

  // Combine dummy data with actual submitted listings for display
  const allListings = [...dummyProperties, ...listings];

  return (
    // Removed the outer div with min-h-screen as App.js now handles this for the whole app
    <> {/* Using a React Fragment here as a top-level element */}
      {/* Removed <Header /> */}

      <main
        className="relative py-12 sm:py-16 overflow-hidden"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2940&auto=format&fit=crop)`,
          backgroundSize: '110% auto',
          backgroundPosition: 'center',
          animation: 'pan 20s infinite alternate linear',
        }}
      >
        <style>
          {`
            @keyframes pan {
              0% { background-position: 50% 0%; }
              100% { background-position: 55% 100%; }
            }
          `}
        </style>

        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 opacity-50"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-2xl font-extrabold text-white sm:text-3xl leading-tight mb-4">
            Find your perfect home in Ghana.
          </h1>

          {/* Search Box */}
          <div className="bg-white rounded-md shadow-lg p-3 md:p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
              <div>
                <label htmlFor="location" className="text-xs font-bold mb-1 block text-gray-700">Location</label>
                <select
                  id="location"
                  className="w-full text-sm px-2 py-1 border rounded"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">All Regions</option>
                  {ghanaRegions.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 lg:col-span-2 flex space-x-1">
                <div className="w-1/2">
                  <label htmlFor="minPrice" className="text-xs font-bold mb-1 block text-gray-700">Min Price (GH₵)</label>
                  <input
                    id="minPrice"
                    type="number"
                    className="w-full text-sm px-2 py-1 border rounded"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="Min"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="maxPrice" className="text-xs font-bold mb-1 block text-gray-700">Max Price (GH₵)</label>
                  <input
                    id="maxPrice"
                    type="number"
                    className="w-full text-sm px-2 py-1 border rounded"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="Max"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="bedrooms" className="text-xs font-bold mb-1 block text-gray-700">Beds</label>
                <select
                  id="bedrooms"
                  className="w-full text-sm px-2 py-1 border rounded"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                >
                  <option value="">Any</option>
                  {bedroomOptions.map((beds) => (
                    <option key={beds} value={beds}>{beds}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="bathrooms" className="text-xs font-bold mb-1 block text-gray-700">Baths</label>
                <select
                  id="bathrooms"
                  className="w-full text-sm px-2 py-1 border rounded"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                >
                  <option value="">Any</option>
                  {bathroomOptions.map((baths) => (
                    <option key={baths} value={baths}>{baths}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 mt-2">
              <div className="lg:col-span-2">
                <label htmlFor="propertyType" className="text-xs font-bold mb-1 block text-gray-700">Type</label>
                <select
                  id="propertyType"
                  className="w-full text-sm px-2 py-1 border rounded"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Any</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="lg:col-span-2">
                <label className="text-xs font-bold mb-1 block text-gray-700">Amenities</label>
                <div className="grid grid-cols-2 gap-1">
                  {amenityOptions.map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`amenity-${amenity}`}
                        value={amenity}
                        checked={amenities.includes(amenity)}
                        onChange={handleAmenityChange}
                        className="h-3 w-3"
                      />
                      <label htmlFor={`amenity-${amenity}`} className="ml-1 text-xs">{amenity}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1 flex items-end justify-end">
                <button
                  onClick={handleSearch}
                  className="w-full text-sm font-bold py-1 px-3 bg-orange-500 text-white rounded hover:bg-orange-600"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Property Listings Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Available Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allListings.length > 0 ? (
            allListings.map((property) => (
              <HouseCard key={property.id} property={property} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 text-lg">No properties available yet. Be the first to list one!</p>
          )}
        </div>
      </section>

      {/* Removed <Footer /> */}

    </>
  );
};

export default LandingPage;