
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;