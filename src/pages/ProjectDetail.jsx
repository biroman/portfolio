import { GithubLogo, Monitor } from "@phosphor-icons/react";
import PropTypes from "prop-types";

const ProjectDetail = ({
  title,
  subtitle,
  description,
  timeline,
  techStack,
  challenges,
  solutions,
  githubLink,
  liveLink,
  projectImage,
}) => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto mt-28 text-left">
      {/* Hero section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-[#3A3A3A] mb-4">{title}</h1>
        <p className="text-lg text-[#666666] mb-8">{subtitle}</p>
        <img
          src={projectImage}
          alt={title}
          className="w-full h-[400px] rounded-xl object-cover"
        />
      </div>

      {/* Project links */}
      <div className="flex gap-4 mb-16">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#3A3A3A] text-[#3A3A3A] rounded-lg hover:bg-[#4F4F4F] hover:text-white transition-all duration-300"
          >
            <GithubLogo size={20} />
            View Code
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#3A3A3A] text-[#3A3A3A] rounded-lg hover:bg-[#4F4F4F] hover:text-white transition-all duration-300"
          >
            <Monitor size={20} />
            Live Demo
          </a>
        )}
      </div>

      {/* Project details */}
      <div className="grid grid-cols-3 gap-12 mb-16">
        <div>
          <h3 className="text-sm uppercase text-[#999999] mb-2">Timeline</h3>
          <p className="text-[#3A3A3A]">{timeline}</p>
        </div>
        <div className="col-span-2">
          <h3 className="text-sm uppercase text-[#999999] mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#f5f5f7] text-[#3A3A3A] rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project description */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#3A3A3A] mb-6">Overview</h2>
        <p className="text-[#666666] leading-relaxed mb-8">{description}</p>
      </div>

      {/* Challenges and Solutions */}
      <div className="grid grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-[#3A3A3A] mb-6">Challenges</h2>
          <ul className="space-y-4">
            {challenges.map((challenge, index) => (
              <li key={index} className="text-[#666666] leading-relaxed">
                {challenge}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#3A3A3A] mb-6">Solutions</h2>
          <ul className="space-y-4">
            {solutions.map((solution, index) => (
              <li key={index} className="text-[#666666] leading-relaxed">
                {solution}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ProjectDetail.propTypes = {
  // Required props
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  challenges: PropTypes.arrayOf(PropTypes.string).isRequired,
  solutions: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectImage: PropTypes.string.isRequired,

  // Optional props
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};

ProjectDetail.defaultProps = {
  githubLink: "",
  liveLink: "",
};

export default ProjectDetail;
