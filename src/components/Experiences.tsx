interface ExpComponentProps {
  command: string;
}

const Experiences: React.FC<ExpComponentProps> = ({ command }) => {
  const experiences = [
    {
      jobTitle: "Solution Developer",
      company: "Inspire Nepal UVic",
      technologies: "React, ASP.NET",
      jobDuration: "Sept, 2023 - Jan, 2024",
    },
    {
      jobTitle: "Web Designer/Developer",
      company: "Uptech Solution LLC USA",
      technologies: "Frontend, WordPress, cPanel",
      jobDuration: "Jan, 2023 - Aug, 2023",
    },
    {
      jobTitle: "Web development Intern",
      company: "InitCreation Pvt. Ltd.",
      technologies: "Frontend, Laravel, WordPress",
      jobDuration: "Apr, 2021 - Dec, 2022",
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
        {experiences.map((exp, index) => (
          <div key={index} className="item">
            <div className="item-name">{exp.jobTitle}</div>
            <div>
              <span>
                <strong>
                  <em>{exp.company}</em>
                </strong>
                <br />
                {exp.technologies}
                <br />
                {exp.jobDuration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Experiences;
