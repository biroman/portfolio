import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ProjectCard = ({
  image,
  title,
  description,
  projectLink,
  externalLink,
}) => {
  return (
    <div className="relative h-[500px] w-full [perspective:1000px] group hover:z-10">
      <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front of card */}
        <div className="absolute w-full h-full rounded-3xl overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </div>
        {/* Back of card */}
        <div className="absolute w-full h-full rounded-3xl overflow-hidden bg-[#f5f5f7] text-[#3A3A3A] [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-8">
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
      <div className="flex m-36 items-center">
        <div className="container flex flex-col mx-auto text-center font-bold text-4xl text-[#3A3A3A] gap-4">
          <h1>Hey, I&apos;m Eivind Buodd. </h1>
          <h1>Have a look at some of my projects.</h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6 mb-24">
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
            title="Web Scraping Data Viewer"
            description="An interactive web application that displays a sortable and searchable table of player information, pulling data from a raw github text file which recieves its data from a custom Python scraper program. It provides features like dynamic styling, editable fields with local storage, clipboard copying, and user feedback."
            externalLink="https://scrap-beta.vercel.app/"
            projectLink="/msscraper"
          />

          <ProjectCard
            image="/assets/chatLogs.png"
            title="Chat Logs"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            projectLink="/chatlogs"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
