import React from 'react';
import { FaHome } from 'react-icons/fa';

const FeaturedCard = ({ image, title, description }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div className="w-96 h-48 mx-auto overflow-hidden rounded-lg shadow-lg mt-8" style={cardStyle}>
      <div className="relative h-full">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 transform scale-100 hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="mb-2 text-3xl font-semibold text-white">{title}</div>
          
          <button className="px-2 text-white border">Read more....</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
