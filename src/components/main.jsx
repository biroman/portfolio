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
            description="A modern analytics dashboard built with React and Tailwind CSS. Features real-time data visualization and interactive metrics for monitoring system performance."
            projectLink="/msdashboard"
          />

          <ProjectCard
            image="/assets/easyplay.png"
            title="EasyPlay"
            description="A streamlined music player application that brings your favorite tunes to life with an intuitive interface and seamless playback experience."
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
            description="A comprehensive chat logging system that helps track and analyze conversation patterns with advanced filtering and search capabilities."
            projectLink="/chatlogs"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
