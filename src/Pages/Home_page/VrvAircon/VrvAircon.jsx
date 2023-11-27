const VrvAircon = () => {
    return (
      <div className="my-10 relative">
        <div
          style={{
            backgroundImage:
              'url("https://i.ibb.co/ZTh2764/d338a7-338bfff529f241d5a9649db76d6802a0-mv2.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '80vh', // You can adjust the height as needed
            position: 'relative',
          }}
          className="md:height-70vh lg:height-90vh xl:height-90vh"
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
            <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 md:mb-4 lg:mb-6 xl:mb-8">The future in air conditioning systems</h1>
              <p className="my-2 mt-4 text-sm md:text-base lg:text-lg xl:text-xl">
                We provide comprehensive air conditioning solutions in collaboration with real estate developers, thermomechanical advisors, and builders. With our climate control solutions, you will never have to sacrifice comfort for energy efficiency.
              </p>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl">From small homes to large office spaces, industry, and hospitality</p>
              <button className="px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 xl:py-5 text-white border bg-blue-500 mt-4 md:mt-6 lg:mt-8 xl:mt-10">
                SEE MORE INFORMATION...
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default VrvAircon;
  