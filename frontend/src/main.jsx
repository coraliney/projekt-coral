import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, theme } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Help from './pages/Help.tsx';
import Contact from "./pages/Contact.tsx";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Search from './pages/Search';
import Register from './pages/Register.tsx'
import Login from './pages/Login.tsx'


const router = createBrowserRouter([
 
  {
    path: "/",
    element: (
      <>
        <React.StrictMode>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </React.StrictMode>,
      </>
    ),
    children: [
      {
        path: "/",
        element: (
              <Home />
        ),
      },

      {
        path: "help",
        element: <Help />,
      },
      {
        path: "contact",
        element: <Contact />
      },

      {
        path: "search",
        element:
          <Search />
      },
      {
        path: "navbar",
        element: <Navbar />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      
    
    ],
  }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
