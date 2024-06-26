interface ProjectsComponentProps {
  command: string;
}

const Projects: React.FC<ProjectsComponentProps> = ({ command }) => {
  const projects = [
    {
      title: "CCT Dashboard",
      description:
        "A business website made for a business that conducts different business related trainings, located at Jwalakhel, Lalitpur, Nepal.",
      technologies: "React, ASP.NET, Leaflet, MSSQL",
      projectLink: "#",
    },
    {
      title: "COM Nepal Website",
      description:
        "A business website made for a business that conducts different business related trainings, located at Jwalakhel, Lalitpur, Nepal.",
      technologies: "WordPress, Elementor",
      projectLink: "https://comnepal.biz/",
    },
    {
      title: "bPretty Beauty Salon",
      description:
        "A business website made for a beauty salon located at Bhanimandal, Lalitpur - Nepal.",
      technologies: "WordPress, Elementor, Custom Theme",
      projectLink: "https://bprettysalon.com/",
    },
    {
      title: "Arko Pana Nepal",
      description:
        "A informatiove website made for a non-profit organization located at Gwarko, Lalitpur - Nepal",
      technologies: "WordPress, Elementor",
      projectLink: "https://arkopananepal.com/",
    },
  ];
  return (
    <>
      <div className="prompt-line">
        <span id="prompt">
          <span className="welcome">Welcome</span>@aeliyadevs:-$
        </span>
        <span className="path">~/</span>
        <input type="text" value={command} disabled={true} />
      </div>
      <div className="output-content">
        {projects.map((project, index) => (
          <div key={index} className="item">
            <div className="item-name">{project.title}</div>
            <div>
              <span>
                <em>{project.description}</em>
                <br />
                {project.technologies}
                <br />
                Live Link -{" "}
                <a
                  href={project.projectLink}
                  target="_blank"
                  title="Unavailable due to business policies"
                >
                  {project.projectLink}
                </a>
              </span>
            </div>
          </div>
        ))}
        More projects on{" "}
        <a href="https://github.com/aeliyadevs" target="_blank">
          GitHub
        </a>
      </div>
    </>
  );
};
export default Projects;
