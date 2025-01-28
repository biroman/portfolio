import ProjectDetail from "./ProjectDetail";

export const Msscraper = () => {
  return (
    <ProjectDetail
      title="Website scraper and userdata viewer"
      subtitle="Automated scraping pipeline with modern data visualization interface"
      timeline="3 weeks (Q1 2023)"
      techStack={["Javascript", "Python", "Selenium", "Tkinter/Pygubu"]}
      problemSpace={[
        "No API access to track player data",
        "Python CLI not accessible for non-technical users",
        "Need for intuitive data visualization for 500+ users",
        "Complex data hierarchy requiring clear visual presentation",
      ]}
      keyFeatures={[
        {
          title: "Hidden User Enumeration",
          description:
            "Discovered and automated extraction of full player list from obscured JavaScript source",
          code: `def get_usernames(driver):
            WebDriverWait(driver, 10).until(EC.presence_of_element_located(
              (By.CSS_SELECTOR, "script[src^='usernames.php?t=']")))
            script_tag = driver.find_element(By.CSS_SELECTOR, "script[src^='usernames.php?t=']")
            src_attr = script_tag.get_attribute("src")
            usernames_url = src_attr.split("usernames.php?t=")[-1]
            driver.get(f"https://mafiaspillet.no/usernames.php?t={usernames_url}")
            return list(set(re.findall(r"'([^']*)'", driver.page_source)))`,
        },
        {
          title: "Intuitive Data Interface",
          description:
            "Designed a modern, responsive interface with focus on matte glass design",
          code: `// Aesthetic gradient background
          background: linear-gradient(to top left, #481638 5%, #04043d 75%);
          
          // Custom scrollbar for better interaction
          ::-webkit-scrollbar {
            width: 2px;
            background: #f1f1f121;
          }
          
          // Smooth hover effects for better feedback
          tr:hover {
            color: rgb(255, 255, 255, 1);
            background-color: rgba(255, 255, 255, 0.137);
            transition: all 0.2s ease;
          }`,
        },
        {
          title: "Visual Hierarchy Implementation",
          description:
            "Developed a color-coded ranking system with status indicators",
          code: `// Dynamic rank color coding
          if (tr.children[2].textContent === " Gudfar") {
            tr.children[2].style.color = "rgb(97, 172, 255)";
          } else if (tr.children[2].textContent === " Capo Crimini") {
            tr.children[2].style.color = "rgb(162, 99, 215)";
          }`,
        },
        {
          title: "Interactive User Features",
          description:
            "Created engaging search and sort functionality with visual feedback",
          code: `// Animated search placeholder
          function typeWriter(text, callback) {
            let index = 0;
            intervalId = setInterval(() => {
              if (index < text.length) {
                inputd.placeholder += text.charAt(index);
                index++;
              }
            }, 100);
          }`,
        },
      ]}
      designProcess={[
        {
          title: "Design",
          description:
            "Took inspiration of windows 11 matte glass design and designed the webpage to match the theme",
        },
        {
          title: "Interaction Design",
          description:
            "Implemented intuitive sorting, filtering, and copy functionality with clear visual feedback",
        },
        {
          title: "Technical Architecture",
          description:
            "Built a robust scraping system with error recovery and automatic GitHub updates",
        },
      ]}
      outcomes={[
        "Streamlined data access for 500+ monthly users through intuitive interface design",
        "Reduced data lookup time from minutes to seconds with efficient search and sort features",
        "Created a visually engaging experience with thoughtful color coding and animations",
        "Implemented automated data collection",
      ]}
      retrospective={[
        "Learned to balance aesthetic design with technical functionality",
        "Discovered the importance of having some user feedback",
        "Gained experience in creating accessible data visualizations",
        "Developed skills in full-stack JavaScript and Python development",
      ]}
      projectImage="/assets/test.png"
      liveLink="https://scrap-beta.vercel.app/"
      githubLink="https://github.com/biroman/scraper"
    />
  );
};
