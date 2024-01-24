
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Help from './pages/Help.tsx';
import Search from "./pages/Search.tsx";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Contact from './pages/Contact.tsx';



const router = createBrowserRouter([
 
  {
    path: "/",
    element: (
      <>
        <div className="xl:flex xl:flex-row">
         <App />
        </div>
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <main >
            <div >
              <Home />
            </div>
          </main>
        ),
      },

      {
        path: "help",
        element: <Help />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "navbar",
        element: <Navbar />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);