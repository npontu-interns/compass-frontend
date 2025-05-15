// src/App.js
import React, { useState } from 'react';
import ListingDetails from './pages/ListingDetails'; // Updated path
import ListingPhotos from './pages/ListingPhotos';     // Updated path
import ListingReviews from './pages/ListingReview';   // Updated path

function App() {
  const [currentPage, setCurrentPage] = useState(1); // 1: Details, 2: Photos, 3: Review
  const [houseDetails, setHouseDetails] = useState({
    address: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    yearBuilt: '',
    description: '',
    sellerName: '',
    sellerEmail: '',
    sellerPhone: '',
  });
  const [mainPicture, setMainPicture] = useState(null); // Stores File object
  const [additionalPictures, setAdditionalPictures] = useState([]); // Array of File objects

  const handleSubmitListing = () => {
    // In a real application, you'd send this data to a backend server.
    // This example just logs it and shows an alert.

    console.log('--- Submitting Listing ---');
    console.log('House Details:', houseDetails);
    console.log('Main Picture:', mainPicture ? mainPicture.name : 'No main picture uploaded');
    console.log('Additional Pictures:', additionalPictures.map(pic => pic.name));
    console.log('--------------------------');

    alert('Listing Submitted Successfully! (Check console for details)');

    // Optionally, reset the form after submission if needed
    // setHouseDetails({ /* reset initial state */ });
    // setMainPicture(null);
    // setAdditionalPictures([]);
    // setCurrentPage(1); // Go back to the first page
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <ListingDetails
            houseDetails={houseDetails}
            setHouseDetails={setHouseDetails}
            setCurrentPage={setCurrentPage}
          />
        );
      case 2:
        return (
          <ListingPhotos
            mainPicture={mainPicture}
            setMainPicture={setMainPicture}
            additionalPictures={additionalPictures}
            setAdditionalPictures={setAdditionalPictures}
            setCurrentPage={setCurrentPage}
          />
        );
      case 3:
        return (
          <ListingReviews
            houseDetails={houseDetails}
            mainPicture={mainPicture}
            additionalPictures={additionalPictures}
            setCurrentPage={setCurrentPage}
            handleSubmitListing={handleSubmitListing}
          />
        );
      default:
        return <ListingDetails />; // Fallback to the first page
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {renderPage()}
    </div>
  );
}

export default App;