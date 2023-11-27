import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
const OpportunitiesProduct = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <>
    <div className="mx-10 p-2 mt-10">
      <div className="flex justify-between">
      <h1 className="text-3xl font-semibold sm:text-center">Products</h1>
        <button className=" px-4 border ">See All Product</button>
      </div>
      <p className="border-2 my-4"></p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between gap-5 px-2 mx-10">

      <div className="card md:w-60 glass ">
        <figure><img className="h-32 w-32 object-fill pt-2" src="https://i.ibb.co/WD2gckk/LG-PISO.png" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title uppercase">LG new inverter floor ceiling</h2>

          <div className="flex justify-between items-center">
            <div>
              <p>$64677.09</p>
            </div>

            <div className="flex gap-3 w-16 mr-3">
              <button onClick={decrement}>
                <FaArrowDown />
              </button>
              <p> {count}</p>
              <button onClick={increment}>
                <FaArrowUp />
              </button>
              <p><MdShoppingCart size={24} color="blue" /></p>

            </div>
          </div>
        </div>
        <p></p>
      </div>

      <div className="card md:w-60 glass ">
        <figure><img className="h-32 w-32 object-fill pt-2" src="https://i.ibb.co/XxVbPtJ/tep85.jpg" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title uppercase">Baxi 50 electric water heater</h2>

          <div className="flex justify-between items-center">
            <div>
              <p>$64677.09</p>
            </div>

            <div className="flex gap-3 w-16 mr-3">
              <button onClick={decrement}>
                <FaArrowDown />
              </button>
              <p> {count}</p>
              <button onClick={increment}>
                <FaArrowUp />
              </button>
              <p><MdShoppingCart size={24} color="blue" /></p>

            </div>
          </div>
        </div>
        <p></p>
      </div>
      <div className="card md:w-60 glass ">
        <figure><img className="h-32 w-32 object-fill pt-2" src="https://i.ibb.co/f1mtqcb/pc41977647-hd-filter-split-18000btu-wall-hanging-air-conditioner-ac-unit-r22-1410w.webp" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title uppercase">Baxi 50 electric water heater</h2>

          <div className="flex justify-between items-center">
            <div>
              <p>$64677.09</p>
            </div>

            <div className="flex gap-3 w-16 mr-3">
              <button onClick={decrement}>
                <FaArrowDown />
              </button>
              <p> {count}</p>
              <button onClick={increment}>
                <FaArrowUp />
              </button>
              <p><MdShoppingCart size={24} color="blue" /></p>

            </div>
          </div>
        </div>
        <p></p>
      </div>

      <div className="card md:w-60 glass ">
        <figure><img className="h-32 w-32 object-fill pt-2" src="https://i.ibb.co/KGn7y6t/images.jpg" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title uppercase">Siam ceiling floor</h2>

          <div className="flex justify-between items-center">
            <div>
              <p>$73900.09</p>
            </div>

            <div className="flex gap-3 w-16 mr-3">
              <button onClick={decrement}>
                <FaArrowDown />
              </button>
              <p> {count}</p>
              <button onClick={increment}>
                <FaArrowUp />
              </button>
              <p><MdShoppingCart size={24} color="blue" /></p>

            </div>
          </div>
        </div>
        <p></p>
      </div>
      <div className="card md:w-60 glass ">
        <figure><img className="h-32 w-32 object-fill pt-2" src="https://i.ibb.co/GcthkKg/cg-oil-heater-11fin.jpg" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title uppercase">LG new inverter floor ceiling</h2>

          <div className="flex justify-between items-center">
            <div>
              <p>$64677.09</p>
            </div>

            <div className="flex gap-3 w-16 mr-3">
              <button onClick={decrement}>
                <FaArrowDown />
              </button>
              <p> {count}</p>
              <button onClick={increment}>
                <FaArrowUp />
              </button>
              <p><MdShoppingCart size={24} color="blue" /></p>

            </div>
          </div>
        </div>
        <p></p>
      </div>
    </div>
    </>


  );
};

export default OpportunitiesProduct;
