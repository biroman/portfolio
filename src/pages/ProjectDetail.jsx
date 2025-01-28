import {
  GithubLogo,
  Monitor,
  Code,
  ChartBar,
  Flask,
  User,
  Clock,
} from "@phosphor-icons/react";
import PropTypes from "prop-types";

const ProjectDetail = ({
  title,
  subtitle,
  timeline,
  techStack,
  githubLink,
  liveLink,
  projectImage,
  problemSpace,
  keyFeatures,
  designProcess,
  visualLanguage,
  outcomes,
  retrospective,
}) => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto mt-28 text-left gap-16">
      {/* Hero section */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-[#3A3A3A]">{title}</h1>
          <p className="text-xl text-[#666666]">{subtitle}</p>
        </div>
        <img
          src={projectImage}
          alt={title}
          className="w-full h-[500px] rounded-2xl object-cover shadow-lg"
        />
      </div>

      {/* Project links */}
      <div className="flex gap-4 mb-8">
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

      {/* Metadata */}
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#666]">
            <Clock size={20} />
            <span className="font-medium">Timeline</span>
          </div>
          <p className="text-[#3A3A3A]">{timeline}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#666]">
            <Code size={20} />
            <span className="font-medium">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-[#f5f5f7] text-[#3A3A3A] rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Space */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#3A3A3A] flex items-center gap-2">
          <ChartBar size={24} />
          Core Challenges
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-[#666]">
          {problemSpace?.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Key Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#3A3A3A] flex items-center gap-2">
          <Flask size={24} />
          Key Features
        </h2>
        <div className="grid gap-6">
          {keyFeatures?.map((feature, index) => (
            <div key={index} className="p-6 bg-[#fafafa] rounded-xl">
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-[#666]">{feature.description}</p>
              {feature.image && (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-[250px] rounded-md object-cover mt-4"
                />
              )}
              {feature.code && (
                <pre className="mt-4 p-4 bg-[#3A3A3A] text-white rounded-lg">
                  <code>{feature.code}</code>
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Design Process */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#3A3A3A] flex items-center gap-2">
          <User size={24} />
          Design Process
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {designProcess?.map((stage, index) => (
            <div key={index} className="p-6 bg-[#fafafa] rounded-xl">
              <div className="text-2xl font-bold text-[#666] mb-2">
                0{index + 1}
              </div>
              <h3 className="font-semibold mb-2">{stage.title}</h3>
              <p className="text-[#666]">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Language */}
      {visualLanguage && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#3A3A3A]">Visual Language</h2>
          <div className="grid grid-cols-3 gap-6">
            {Object.entries(visualLanguage).map(([category, details]) => (
              <div key={category} className="p-6 bg-[#fafafa] rounded-xl">
                <h3 className="font-semibold mb-2">{category}</h3>
                <ul className="list-disc pl-4 space-y-2">
                  {details.map((detail, index) => (
                    <li key={index} className="text-[#666]">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Outcomes */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#3A3A3A]">Outcomes</h2>
        <ul className="space-y-2">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-2 text-[#666]">
              <span className="text-green-600">✓</span>
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      {/* Retrospective */}
      <div className="space-y-6 mb-28">
        <h2 className="text-2xl font-bold text-[#3A3A3A]">Key Learnings</h2>
        <ul className="list-disc pl-6 space-y-4 text-[#666]">
          {retrospective?.map((learning, index) => (
            <li key={index}>{learning}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProjectDetail.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  problemSpace: PropTypes.arrayOf(PropTypes.string),
  keyFeatures: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      code: PropTypes.string,
    })
  ),
  designProcess: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  visualLanguage: PropTypes.object,
  outcomes: PropTypes.arrayOf(PropTypes.string),
  retrospective: PropTypes.arrayOf(PropTypes.string),
  projectImage: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};

export default ProjectDetail;
