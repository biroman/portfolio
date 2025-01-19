import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import { Work } from "../pages/work";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Msscraper } from "../pages/msscraper";
import { Msdashboard } from "../pages/msdashboard";
import { Easyplay } from "../pages/easyplay";
import { Chatlogs } from "../pages/chatlogs";

const Layout = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 0 }}
        transition={{
          type: "tween",
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/work" replace />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/msscraper" element={<Msscraper />} />
          <Route path="/msdashboard" element={<Msdashboard />} />
          <Route path="/easyplay" element={<Easyplay />} />
          <Route path="/chatlogs" element={<Chatlogs />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
