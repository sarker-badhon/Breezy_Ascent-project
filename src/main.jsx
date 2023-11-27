import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './LayOut/Main.jsx';
import Home from './Pages/Home_page/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main>Hello world!</Main>,
    children:[
      {
        path:"/",
      element:<Home></Home>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);