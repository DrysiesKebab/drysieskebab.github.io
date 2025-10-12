import React, { useState } from 'react';
import menu from '../resources/menu';
import './Home.css';
import ItemPopup from './ItemPopup';
import CallPopup from './CallPopup';

const categories = ['mains', 'sides', 'drinks', 'desserts'] as const;

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('mains');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Phone number for ordering
  const phoneNumber = '0412345678'; // replace with your actual number

  // Filter menu items based on selected category and search term
  const filteredMenu = Object.keys(menu).filter((itemName) => {
    const item = menu[itemName];
    const matchesCategory = item.category === selectedCategory;
    const matchesSearch =
      itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className="flex flex-col items-center min-h-screen text-orange-600"
      style={{ backgroundColor: '#162836' }}
    >
      {/* Top Call to Action */}
      <div
        style={{ backgroundColor: '#162836' }}
        className="w-full p-4 flex justify-between md:justify-between items-center sticky top-0 z-50"
      >
        <h1 className="text-lg md:text-xl font-bold">Drysies Kebabs</h1>
        <button
          onClick={() => setShowCallPopup(true)}
          className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg font-semibold"
        >
          📞 Call to Order
        </button>
      </div>

      {/* Hero Section */}
      <div
        className="w-full h-[40vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://just-eat-prod-sg-res.cloudinary.com/image/upload/c_thumb,w_1097,h_480/f_auto/q_auto/dpr_2.0/d_au:cuisines:kebab-4.jpg/v1/au/restaurants/11059574.jpg')",
        }}
      >
        <img
          className="h-[30vh]"
          style={{ borderRadius: '30vh' }}
          src="/images/drysies-logo.jpeg"
          alt="Drysies Kebabs Logo"
        />
      </div>

      {/* Menu Section */}
      <div className="max-w-6xl px-4 sm:px-6 py-10 w-full">
        <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
          Menu
        </h2>

        {/* Category Selection */}
        <div className="flex justify-center mb-4 space-x-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg font-semibold text-sm sm:text-base ${
                selectedCategory === cat
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredMenu.map((itemName: string) => (
            <div
              key={itemName}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition flex items-center"
              onClick={() => {
                setSelectedItem(itemName);
                setShowPopup(true);
              }}
            >
              {/* Left side: Name & description */}
              <div className="flex-1 p-3 sm:p-4 text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-orange-600 leading-tight">
                  {itemName}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-3">
                  {menu[itemName].desc}
                </p>
                <p className="mt-1 sm:mt-2 font-semibold text-black text-sm sm:text-base">
                  {menu[itemName].price}
                </p>
              </div>

              {/* Right side: Image */}
              <div className="flex-shrink-0 p-2 sm:p-4">
                <img
                  className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-md"
                  src={menu[itemName].img}
                  alt={itemName}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl px-6 py-10 text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">About Us</h2>
        <p className="mb-4 text-lg text-white">
          Welcome to <strong>Drysies Kebabs</strong>, your go-to food truck for
          mouthwatering kebabs, fresh salads, crispy chips, and authentic
          flavours. We pride ourselves on serving generous portions made from
          the freshest local ingredients, ensuring every bite is packed with
          taste.
        </p>
        <p className="mb-4 text-lg text-white">
          You’ll find us conveniently located at the{' '}
          <strong>Shell fuel station, 110 High Street, Drysdale</strong> —
          perfect for a quick lunch, a filling dinner, or a late-night craving
          fix.
        </p>
        <p className="text-lg text-white">
          Whether you’re a kebab enthusiast or a first-time visitor, our
          friendly team is here to serve up your favourites with a smile.
        </p>
      </div>

      {/* Reviews Section */}
      <div className="max-w-4xl px-6 py-10 bg-black text-white rounded-lg my-10">
        <h2 className="text-2xl font-bold text-orange-600 mb-6">
          What Our Customers Say
        </h2>
        <div className="flex flex-col sm:flex-row justify-around items-center mb-8 gap-4">
          <div className="text-center">
            <img
              src="/images/ubereats.png"
              alt="Uber Eats"
              className="h-10 mx-auto mb-2"
            />
            <p>⭐ 4.7 / 5</p>
          </div>
          <div className="text-center">
            <img
              src="/images/menulog.png"
              alt="Menulog"
              className="h-10 mx-auto mb-2"
            />
            <p>⭐ 4.8 / 5</p>
          </div>
          <div className="text-center">
            <img
              src="/images/doordash.png"
              alt="DoorDash"
              className="h-10 mx-auto mb-2"
            />
            <p>⭐ 4.6 / 5</p>
          </div>
        </div>
        <div className="space-y-4">
          <p>
            ⭐⭐⭐⭐⭐ “Best kebab I’ve ever had! Fresh, tasty, and the sauces are
            amazing. Highly recommend!” – Sarah J.
          </p>
          <p>
            ⭐⭐⭐⭐⭐ “Always friendly service and huge portions. I can never finish
            a whole HSP in one go!” – Tom R.
          </p>
          <p>
            ⭐⭐⭐⭐⭐ “Stopped here on a road trip, and now I’m planning another
            trip just for the kebabs!” – Emily K.
          </p>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="w-full bg-gray-900 text-gray-300 text-center p-6 mt-10">
        <p className="text-sm">
          © 2025 Drysies Kebabs. Operated under <strong>ACReddy Pvt Limited</strong>. <br />
          ABN: 12 345 678 910 | Registered as per Australian Government
          recommendations.
        </p>
      </div>

      {showPopup && (
        <ItemPopup
          item={selectedItem}
          options={menu[selectedItem]}
          onClose={() => setShowPopup(false)}
        />
      )}
      {showCallPopup && <CallPopup onClose={() => setShowCallPopup(false)} />}
    </div>
  );
};

export default Home;
