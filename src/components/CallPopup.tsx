import React from 'react';

type PopupProps = {
  onClose: () => void;
};

const CallPopup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Popup Card */}
      <div className="relative bg-[#162836] text-white rounded-2xl shadow-2xl w-11/12 max-w-sm p-6 border border-orange-400 animate-slideUp">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-orange-400">
            Call and place your order
          </h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-orange-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
              fill="currentColor"
              viewBox="0 0 16 16"
              width="22"
              height="22"
            >
              <path d="M11.868 3.205 8 7.073 4.133 3.205l-.928.928L7.073 8l-3.868 3.868.928.927L8 8.928l3.868 3.867.927-.927L8.928 8l3.867-3.867-.927-.928Z"></path>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="text-center space-y-5">
          <p className="text-sm sm:text-base text-gray-200">
            We’re ready to take your order! Tap the button below to call our team.
          </p>

          <a
            href="tel:+61451982401"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition-all w-full"
          >
            📞 <span className="text-lg font-bold">+61 451 982 401</span>
          </a>

          <a
            href="tel:+61420803737"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition-all w-full"
          >
            📞 <span className="text-lg font-bold">+61 420 803 737</span>
          </a>

          {/* Operating Hours */}
          <div className="mt-4 text-sm text-gray-300 bg-[#1d3a4e] rounded-lg p-3 border border-orange-500/40">
            <p className="text-orange-400 font-semibold mb-2">Operating Hours</p>
            <p>🕓 <strong>Mon – Thu:</strong> 11:00 AM – 9:30 PM</p>
            <p>🕓 <strong>Fri – Sat:</strong> 11:00 AM – 12:00 Midnight</p>
            <p>🕓 <strong>Sunday:</strong> 11:00 AM – 10:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallPopup;
