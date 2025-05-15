// src/pages/EnquiryFormPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EnquiryFormPage = ({ onSubmitEnquiry }) => {
  const { propertyId } = useParams();
  const navigate = useNavigate(); // Make sure useNavigate is used

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStatus(null);

    const enquiryData = {
      propertyId: propertyId,
      ...formData,
      timestamp: new Date().toISOString(),
    };

    console.log('Submitting enquiry (mock):', enquiryData);

    try {
      onSubmitEnquiry(enquiryData);
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      alert('Your enquiry has been sent successfully!');
      navigate(`/property/${propertyId}`);
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setSubmissionStatus('error');
      alert('Failed to send enquiry. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Enquire About Property ID: {propertyId}</h2>

        {submissionStatus === 'success' && (
          <p className="text-green-600 text-center mb-4">Enquiry sent successfully!</p>
        )}
        {submissionStatus === 'error' && (
          <p className="text-red-600 text-center mb-4">There was an error sending your enquiry. Please try again.</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Your Phone (Optional):</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              placeholder="I am interested in this property..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Enquiry
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)} // ISSUE DEY HERE
            className="mt-2 w-full bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryFormPage;