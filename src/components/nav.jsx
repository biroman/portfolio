import { NavLink } from "react-router";
import { useLocation } from "react-router-dom";
import resume from "../assets/resume.pdf";

const Nav = () => {
  const location = useLocation(); // Get the current location of the page

  // Check if the current route is '/work'
  const isAboutActive =
    location.pathname == "/about" || location.pathname == "/contact";
  return (
    <div>
      <div className="flex relative flex-row pt-20 items-center">
        <div className={`w-24 ${isAboutActive ? "text-[#3A3A3A]" : ""}`}>
          Eivind Buodd
        </div>
        <div className="flex container mx-auto flex-row justify-end align-center gap-8">
          <div className="w-[35px]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " cursor-default text-[#3A3A3A] transition-all duration-300"
                  : "inactive hover:text-[#3A3A3A] transition-all duration-300"
              }
              to="/work"
            >
              Work
            </NavLink>{" "}
          </div>
          <div className="w-[40px]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " cursor-default text-[#3A3A3A] transition-all duration-300"
                  : "inactive hover:text-[#3A3A3A] transition-all duration-300"
              }
              to="/about"
            >
              About
            </NavLink>
          </div>
          <div className="w-[52px]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " cursor-default text-[#3A3A3A] transition-all duration-300"
                  : "inactive hover:text-[#3A3A3A] transition-all duration-300"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
          <div className="w-[55px]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " cursor-default text-[#3A3A3A] transition-all duration-300"
                  : "inactive hover:text-[#3A3A3A] transition-all duration-300"
              }
              to={{ pathname: resume }}
              target="_blank"
            >
              Resumé
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
