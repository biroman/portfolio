import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = ({
  image,
  title,
  description,
  projectLink,
  externalLink,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile(); // Initial check
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleMobileClick = () => {
    if (isMobile) {
      window.location.href = projectLink; // Redirect to the project link on mobile
    }
  };

  return (
    <div
      className={` [perspective:1000px] ${isMobile ? "" : "group hover:z-10"}`}
      onClick={handleMobileClick} // Only triggers on mobile
    >
      {!isMobile ? (
        <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front of card */}
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover md:w-null md:h-full"
              src={image}
              alt={title}
            />
          </div>
          {/* Back of card */}
          <div className="absolute w-full h-full rounded-xl overflow-hidden bottom-0 bg-[#f5f5f7] text-[#3A3A3A] [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-8">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <p className="text-sm">{description}</p>
            <div className="mt-6 flex gap-4">
              <NavLink
                to={projectLink}
                className="px-4 py-2 bg-[#3A3A3A] text-white rounded-lg hover:bg-[#4F4F4F] active:bg-[#3A3A3A] hover:text-white"
              >
                View Project
              </NavLink>
              <NavLink
                to={externalLink}
                className="px-4 py-2 border border-[#3A3A3A] text-[#3A3A3A] rounded-lg hover:bg-[#4F4F4F] hover:text-white"
                target="_blank"
              >
                Live Demo
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        /* Mobile view with static card */
        <div className="w-full rounded-xl overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  externalLink: PropTypes.string,
};

const Main = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex my-12 md:m-36 items-center px-4">
        <div className="container flex flex-col mx-auto text-center font-bold text-2xl md:text-4xl text-[#3A3A3A] gap-4">
          <h1>Hey, I&apos;m Eivind Buodd. </h1>
          <h1>Have a look at some of my projects.</h1>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          <ProjectCard
            image="/assets/msDashboard.png"
            title="MS Dashboard"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            projectLink="/msdashboard"
          />

          <ProjectCard
            image="/assets/easyplay.png"
            title="EasyPlay"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            projectLink="/easyplay"
          />

          <ProjectCard
            image="/assets/msScraper.png"
            title="User Data Viewer"
            description="An interactive web application that displays a sortable and searchable table of player information, pulling data from a raw github text file which recieves its data from a custom Python scraper program. It provides features like dynamic styling, editable fields with local storage, clipboard copying, and user feedback."
            externalLink="https://scrap-beta.vercel.app/"
            projectLink="/msscraper"
          />

          <ProjectCard
            image="/assets/chatLogs.png"
            title="Twitch Chat Logs"
            description="An webpage where users can search for other Twitch users to view their chat logs on a specific Twitch channel. The webpage was designed to resemble how the Twitch chat look and behaved, and provides a dynamic and interactive experience for users to explore and analyze their chat history."
            projectLink="/chatlogs"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
