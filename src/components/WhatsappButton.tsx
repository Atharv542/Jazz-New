import { useState } from "react";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      {hovered && (
        <div className="mb-2 px-1 py-1 text-sm bg-gray-800 text-white rounded-lg shadow-md ">
          Chat Now
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971582619895" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-2 rounded-full shadow-lg transition-transform transform hover:scale-110 duration-500"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
