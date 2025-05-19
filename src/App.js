// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';

// Import your page components
import ListingDetails from './pages/ListingDetails';
import ListingPhotos from './pages/ListingPhotos';
import ListingReviews from './pages/ListingReview';
import LandingPage from './pages/LandingPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import Login from './pages/Login';
import Register from './pages/Register';
import EnquiryFormPage from './pages/EnquiryFormPage'; // NEW: Import EnquiryFormPage

// Import Navbar and Footer ONCE here
import Navbar from './components/Navbar';
import Footer from './components/footer';

function AppContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [houseDetails, setHouseDetails] = useState({
    address: '', price: '', propertyType: '', bedrooms: '', bathrooms: '',
    squareFootage: '', yearBuilt: '', yearRenovated: '', flooring: '',
    heatingCooling: '', lotSize: '', exteriorFeatures: '', parking: '',
    description: '', sellerName: '', sellerEmail: '', sellerPhone: '',
  });
  const [mainPicture, setMainPicture] = useState(null);
  const [additionalPictures, setAdditionalPictures] = useState([]);
  const [submittedListings, setSubmittedListings] = useState([]);

  // NEW: State to store mock enquiries
  const [submittedEnquiries, setSubmittedEnquiries] = useState([]);

  // --- AUTHENTICATION STATE ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Load user from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const navigate = useNavigate();

  // --- AUTHENTICATION FUNCTIONS ---
  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setCurrentUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    navigate('/');
  };

  const handleRegister = (userData) => {
    console.log('Registered user (mock):', userData);
    navigate('/login');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    navigate('/');
  };
  // --- END AUTHENTICATION FUNCTIONS ---

  // NEW: Function to handle mock enquiry submission
  const handleEnquirySubmission = (enquiryData) => {
    setSubmittedEnquiries(prev => [...prev, enquiryData]);
    console.log("Enquiry received by App.js:", enquiryData);
    // In a real app, this would send data to a backend
  };


  const handleSubmitListing = () => {
    const newListingId = `listing-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const newListing = {
      id: newListingId,
      ...houseDetails,
      mainPicture: mainPicture,
      additionalPictures: additionalPictures,
      addedTime: "just now",
      listedBy: currentUser ? currentUser.username : 'Guest',
    };

    setSubmittedListings(prevListings => [...prevListings, newListing]);

    alert('Listing Submitted Successfully! You will now be redirected to the Home Page.');

    // Reset the form
    setHouseDetails({
      address: '', price: '', propertyType: '', bedrooms: '', bathrooms: '',
      squareFootage: '', yearBuilt: '', yearRenovated: '', flooring: '',
      heatingCooling: '', lotSize: '', exteriorFeatures: '', parking: '',
      description: '', sellerName: '', sellerEmail: '', sellerPhone: '',
    });
    setMainPicture(null);
    setAdditionalPictures([]);
    setCurrentPage(1);

    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage listings={submittedListings} />} />
          <Route path="/property/:id" element={<PropertyDetailsPage listings={submittedListings} />} />

          {/* NEW: Route for the Enquiry Form Page */}
          <Route path="/enquiry/:propertyId" element={
            <div className="p-4"> {/* Added padding */}
              <EnquiryFormPage onSubmitEnquiry={handleEnquirySubmission} />
            </div>
          } />

          <Route path="/login" element={
            <div className="min-h-screen flex items-center justify-center p-4">
              <Login onLogin={handleLogin} />
            </div>
          } />
          <Route path="/register" element={
            <div className="min-h-screen flex items-center justify-center p-4">
              <Register onRegister={handleRegister} />
            </div>
          } />

          <Route
            path="/list-property"
            element={
              isLoggedIn ? (
                <div className="w-full p-4">
                  {currentPage === 1 && (
                    <ListingDetails
                      houseDetails={houseDetails}
                      setHouseDetails={setHouseDetails}
                      setCurrentPage={setCurrentPage}
                    />
                  )}
                  {currentPage === 2 && (
                    <ListingPhotos
                      mainPicture={mainPicture}
                      setMainPicture={setMainPicture}
                      additionalPictures={additionalPictures}
                      setAdditionalPictures={setAdditionalPictures}
                      setCurrentPage={setCurrentPage}
                    />
                  )}
                  {currentPage === 3 && (
                    <ListingReviews
                      houseDetails={houseDetails}
                      mainPicture={mainPicture}
                      additionalPictures={additionalPictures}
                      setCurrentPage={setCurrentPage}
                      handleSubmitListing={handleSubmitListing}
                    />
                  )}
                </div>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;