import "./App.css";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Work } from "./pages/work";
import { Msscraper } from "./pages/msscraper";
import { Msdashboard } from "./pages/msdashboard";
import { Easyplay } from "./pages/easyplay";
import { Chatlogs } from "./pages/chatlogs";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="flex w-full content-center text-center grid grid-cols-1">
        <div className="flex items-center justify-center h-screen w-screen text-[#999999] text-[14px]">
          <div className="container mx-auto mb-0 px-44 h-screen">
            <section className="h-full grid grid-cols-1">
              <NavBar />
              <Routes className="">
                <Route path="/" element={<Navigate to="/work" />} />
                <Route path="/" replace element={<Work />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/resume" element={<Resume />} /> */}
                <Route path="/work" element={<Work />} />
                <Route path="/msscraper" element={<Msscraper />} />
                <Route path="/msdashboard" element={<Msdashboard />} />
                <Route path="/easyplay" element={<Easyplay />} />
                <Route path="/chatlogs" element={<Chatlogs />} />
              </Routes>
              <Footer />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="flex items-center justify-center h-screen w-screen text-[#999999] text-[14px]">
<div className="container mx-auto mb-0 px-44 h-screen">
  <section className="h-full">
    <NavBar />
    <Main />
  </section>
</div>
</div> */
}

export default App;
