
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const TriangularSolar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up"  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-4 md:mx-8 lg:mx-20">
      <div className="ml-0 md:ml-8">
        <img className="w-full h-auto md:h-72" src="https://i.ibb.co/2PW8Gvj/aelios.jpg" alt="" />
      </div> 
      <div className="md:ml-0">
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold mb-2 md:mb-4 lg:mb-4">Triangular solar tanker</h1>
        <p className="font-semibold text-lg md:text-xl lg:text-xl mb-2 md:mb-4 lg:mb-4">Vacuum tube technology</p>
        <p className="font-normal text-base md:text-lg lg:text-lg mb-2 md:mb-4 lg:mb-4">
          The triangular solar hot water tank with vacuum tubes works with clean and inexhaustible energy. Friendly with the environment and completely autonomous. This technology allows up to 100% energy savings.
        </p>
        <div className="py-2 md:py-4 lg:py-4">
          <button className="px-4 md:px-6 lg:px-8 border font-semibold text-sm md:text-base lg:text-base">Learn more about triangular solar hot water tank</button>
        </div>
      </div>
    </div>
  );
};

export default TriangularSolar;
