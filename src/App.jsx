import "./App.css";
import { useLayoutEffect } from "react";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Work } from "./pages/work";
import { Msscraper } from "./pages/msscraper";
import { Msdashboard } from "./pages/msdashboard";
import { Easyplay } from "./pages/easyplay";
import { Chatlogs } from "./pages/chatlogs";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import Layout from "./components/layout";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <div className="flex w-full content-center text-center">
      <div className="flex items-center justify-center h-screen w-screen text-[#999999] text-[14px]">
        <div className="container mx-auto mb-0 px-44 h-screen">
          <section className="h-full grid grid-cols-1">
            <Wrapper>
              <NavBar />
              <Layout>
                <Routes>
                  <Route path="/" element={<Navigate to="/work" replace />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/msscraper" element={<Msscraper />} />
                  <Route path="/msdashboard" element={<Msdashboard />} />
                  <Route path="/easyplay" element={<Easyplay />} />
                  <Route path="/chatlogs" element={<Chatlogs />} />
                </Routes>
              </Layout>
              <Footer />
            </Wrapper>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
