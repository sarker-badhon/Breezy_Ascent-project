// App.js

import React from 'react';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
  const data = [
    {
      title: 'Residencial',
      
      image: 'https://i.ibb.co/GTWx92m/gettyimages-1159543952-612x612.jpg',
    },
    {
      title: 'Comercial',
      description: 'Lorem ipsum dolor sit amet.',
      image: 'https://i.ibb.co/LRwmD4t/gettyimages-1419539600-612x612.jpg',
    },
    {
      title: 'Industrial',
   
      image: 'https://i.ibb.co/MZPYpDG/gettyimages-514269723-612x612.jpg',
    },

  ];

  return (
    <div className="flex flex-wrap justify-center " data-aos="fade-right">
      {data.map((card, index) => (
        <FeaturedCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Featured;
