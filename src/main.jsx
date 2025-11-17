
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Root';
import Home from './page/Home/Home';
import Shop from './page/Shop/Shop';
import Blog from './page/Blog/Blog';
import Contact from './page/Contact/Contact';
import About from './page/About/About';
import SingleProductPage from './shared/SingleProductPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/shop",
        element: <Shop></Shop>
      }
      ,
      {
        path:"/about",
        element: <About></About>
      }
      ,
      {
        path:"/contact",
        element: <Contact></Contact>
      }
      ,
      {
        path:"/blog",
        element: <Blog></Blog>
      }
      ,
      {
        path:"/shop/:id",
        element: <SingleProductPage></SingleProductPage>
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
