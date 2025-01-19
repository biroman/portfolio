import "./App.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import Layout from "./components/layout";

const Wrapper = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="flex w-full content-center text-center">
      <div className="flex items-center justify-center h-screen w-screen text-[#999999] text-[14px]">
        <div className="container mx-auto mb-0 px-44 h-screen">
          <section className="h-full grid grid-cols-1">
            <Wrapper />
            <NavBar />
            <Layout />
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
