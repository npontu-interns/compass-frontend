import React from 'react';
import { FaHome, FaList, FaHeart, FaUser, FaPlus, FaSearch } from 'react-icons/fa';

const listings = [
  {
    id: 1,
    title: "3-Bedroom Apartment in Accra",
    price: "GHC 1,200/month",
    status: "active",
    views: 3,
    favorites: 0,
    listedDate: "5/14/2025",
    image: "https://via.placeholder.com/100" // Replace with your image URLs
  },
  {
    id: 2,
    title: "Luxury Villa in Kumasi",
    price: "GHC 5,000/month",
    status: "active",
    views: 4,
    favorites: 0,
    listedDate: "5/15/2025",
    image: "https://via.placeholder.com/100"
  }
];

const UserDashboard = () => {
  const totalViews = listings.reduce((acc, item) => acc + item.views, 0);
  const totalFavorites = listings.reduce((acc, item) => acc + item.favorites, 0);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-4 flex items-center gap-3 border-b">
          <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center">E</div>
          <div>
            <p className="font-bold text-sm">Emmanuel Adutwum</p>
            <p className="text-xs text-gray-500">user</p>
          </div>
        </div>
        <nav className="p-4 space-y-4 text-sm">
          <div className="flex items-center gap-2"><FaHome /> Overview</div>
          <div className="flex items-center gap-2"><FaList /> My Listings</div>
          <div className="flex items-center gap-2"><FaPlus /> Create Listing</div>
          <div className="flex items-center gap-2"><FaHeart /> Favorites</div>
          <div className="flex items-center gap-2"><FaUser /> Profile</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-xl font-bold mb-4">Your Listings Overview</h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card title="Active Listings" count={listings.length} color="green" />
          <Card title="Total Listings" count={listings.length} color="blue" />
          <Card title="Pending Listings" count={0} color="yellow" />
          <Card title="Denied Listings" count={0} color="red" />
        </div>

        {/* Listings Table */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-md font-semibold mb-4">Your Listings Performance</h2>
          <div className="flex justify-end mb-2">
            <div className="relative">
              <input type="text" placeholder="Search listings..." className="border rounded pl-8 pr-2 py-1 text-sm" />
              <FaSearch className="absolute left-2 top-2 text-gray-400" />
            </div>
          </div>
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b">
              <tr>
                <th>Property</th>
                <th>Status</th>
                <th>Views</th>
                <th>Favorites</th>
                <th>Listed Date</th>
              </tr>
            </thead>
            <tbody>
              {listings.map(listing => (
                <tr key={listing.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 flex items-center gap-2">
                    <img src={listing.image} alt="listing" className="w-12 h-12 object-cover rounded" />
                    <div>
                      <p>{listing.title}</p>
                      <p className="text-gray-500 text-xs">{listing.price}</p>
                    </div>
                  </td>
                  <td><span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">{listing.status}</span></td>
                  <td>{listing.views}</td>
                  <td>{listing.favorites}</td>
                  <td>{listing.listedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Stats */}
          <div className="flex justify-end mt-4 gap-4">
            <div className="bg-gray-100 p-2 rounded text-sm">
              <strong>Total Listing Views:</strong> {totalViews}
            </div>
            <div className="bg-gray-100 p-2 rounded text-sm">
              <strong>Total Favorites:</strong> {totalFavorites}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Card Component
const Card = ({ title, count, color }) => {
  const bgMap = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700"
  };
  return (
    <div className={`p-4 rounded shadow bg-white`}>
      <p className="text-sm font-medium">{title}</p>
      <div className={`mt-2 inline-block px-3 py-1 text-xs rounded-full ${bgMap[color]}`}>
        {count}
      </div>
    </div>
  );
};

export default UserDashboard;
