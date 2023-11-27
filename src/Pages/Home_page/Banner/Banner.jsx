
const Banner = () => {
    return (
        <div style={{ backgroundImage: 'url("https://i.ibb.co/6Zq2LNT/084a466a517be79c5324.png")' }} className="w-full h-96 object-contain hover:object-scale-down bg-cover bg-center">
            <div className="text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold pt-8 sm:pt-16">
                    Style technology and sustainability in <br />
                    air conditioning for your products
                </h2>

                <div className="join mt-5">
                    <input className="input input-bordered join-item mb-2  sm:mb-0" placeholder="Search for anything ..." />
                    <button className="btn join-item bg-blue-800 text-white hover:text-black rounded-r-full">Search</button>
                </div>
            </div>
        </div>

    );
};
export default Banner;