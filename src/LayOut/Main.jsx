import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import NewsLetter from '../Shared/NewsLetter';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Main;


// const Main =()=>{
//     return(
//         <div>

//         </div>
//     );
// };
// export default Main;