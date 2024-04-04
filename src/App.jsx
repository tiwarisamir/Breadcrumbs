import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Breadcrumbs from "./component/Breadcrumbs";

function App() {
  return (
    <>
      <Header />
      <div className="mt-[5rem]">
        {/* Breadcrumb */}
        <Breadcrumbs />
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default App;
