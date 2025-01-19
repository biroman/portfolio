import ProjectDetail from "./ProjectDetail";

export const Msscraper = () => {
  return (
    <ProjectDetail
      title="Web Scraping Data Viewer"
      subtitle="A web application for viewing and managing scraped player data"
      description="[Full description]"
      timeline="March 2023 - April 2023"
      techStack={["Javascript", "CSS", "Python"]}
      challenges={["Challenge 1 description", "Challenge 2 description"]}
      solutions={["Solution 1 description", "Solution 2 description"]}
      githubLink="https://github.com/biroman/scraper"
      liveLink="https://scrap-beta.vercel.app/"
      projectImage="/assets/msScraper.png"
    />
  );
};
