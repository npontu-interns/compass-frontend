import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- useNavigate for routing
import Header from '../components/Navbar';
import HouseCard from '../components/HouseCard';

const ghanaRegions = [
  'Greater Accra', 'Ashanti', 'Eastern', 'Western', 'Central',
  'Volta', 'Northern', 'Upper East', 'Upper West', 'Bono East',
  'Ahafo', 'Savannah', 'North East', 'Oti', 'Bono', 'Western North',
];

const propertyTypes = ['House', 'Apartment', 'Condo'];
const bedroomOptions = [1, 2, 3, 4, '4+'];
const bathroomOptions = [1, 2, 3, '3+'];
const amenityOptions = ['Pool', 'Backyard', 'Balcony', 'Garage'];

const LandingPage = () => {
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

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

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

      {/* Selling Opportunities */}
      <HouseCard />
       
    </div>
  );
};

export default LandingPage;
