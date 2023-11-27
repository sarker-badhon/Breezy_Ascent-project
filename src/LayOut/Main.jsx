import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
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