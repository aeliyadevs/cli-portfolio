interface SkillsComponentProps {
  command: string;
}

const Skills: React.FC<SkillsComponentProps> = ({ command }) => {
  const skills = [
    {
      name: "Frontend",
      description: "React.js, JavaScript, HTML5, CSS3, Bootstrap, Material-UI",
    },
    {
      name: "Backend",
      description: "ASP.NET MVC, Web API, C#",
    },
    {
      name: "Database",
      description: "MySQL, SQL Server, SSMS",
    },
    {
      name: "Tools & Technologies",
      description: "Git, Visual Studio, VS Code, Postman",
    },
    {
      name: "Other",
      description:
        "RESTful APIs, Authentication (JWT), Agile Methodologies, Unit Testing",
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
        {skills.map((skill, index) => (
          <div key={index} className="item">
            <div className="item-name">{skill.name}</div>
            <div>{skill.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Skills;
