import { ReactNode, useState } from "react";
import resume from "../assets/resume-aeliyadevs-2024.pdf";

const PromptComponent = () => {
  const [command, setCommand] = useState<string>("");
  const [output, setOutput] = useState<Array<string>>([]);
  const [outputSection, setOutputSection] = useState<Array<ReactNode>>([]);

  const commands = [
    {
      name: "bio",
      description: "My short introduction",
    },
    {
      name: "skills",
      description: "My skills",
    },
    {
      name: "exp",
      description: "My work experiences",
    },
    {
      name: "edu",
      description: "My educational qualifications",
    },
    {
      name: "projects",
      description: "My projects",
    },
    {
      name: "contact",
      description: "My contact informations",
    },
    {
      name: "resume",
      description: "View or download resume",
    },
    {
      name: "clear",
      description: "Clear screen",
    },
    {
      name: "Exit",
      description: "Exit",
    },
  ];

  const bio = [
    {
      name: "Intro",
      description:
        "Innovative Full Stack Web Developer adept in leveraging React.js, ASP.NET, and MySQL to build robust and scalable web applications.",
    },
    {
      name: "Summary",
      description:
        "Experienced Full Stack Web Developer with a strong background in building scalable web applications using React.js and ASP.NET. Proficient in designing and implementing database solutions with MySQL. Skilled in frontend and backend development, with a focus on delivering high-quality software solutions that meet client requirements. Proven ability to work collaboratively in agile environments to deliver projects on time.",
    },
  ];
  const technicalSkills = [
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

  const education = [
    {
      level: "Bachelor Level - B.SC.CSIT",
      institute: "Madan Bhandari Memorial College",
      address: "New Baneshwor, Kathmandu",
      passedYear: "2023",
    },
    {
      level: "+2 - Science",
      institute: "Pinnacle Academy",
      address: "Lagankhel, Lalitpur",
      passedYear: "2018",
    },
    {
      level: "Basic Level Education(SLC)",
      institute: "Siddhartha Vanasthali Institute",
      address: "Panauti-8, Kavre",
      passedYear: "2016",
    },
  ];

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

  const contactInfo = [
    {
      name: "Phone",
      description: "9876543210",
    },
    {
      name: "email",
      description: "aeliyadevs@gmail.com",
    },
    {
      name: "facebook",
      description: "https://facebook.com",
    },
    {
      name: "linkedin",
      description: "https://linkedin.com",
    },
    {
      name: "github",
      description: "https://github.com",
    },
  ];

  const HandleEnerKeyPress = () => {
    switch (command) {
      case "help":
        setOutput([...output, command]);
        setOutputSection([
          ...outputSection,
          <>
            <div id="prompt-line">
              <span id="prompt">
                <span className="welcome">Welcome</span>@aeliyadevs:-$
              </span>
              <span className="path">~/</span>
              <input type="text" value={command} disabled={true} />
            </div>
            <div className="output-content">
              {commands.map((command, index) => (
                <div key={index} className="item">
                  <div className="item-name">{command.name}</div>
                  <div>{command.description}</div>
                </div>
              ))}
            </div>
          </>,
        ]);
        break;

      case "bio":
        setOutputSection([
          ...outputSection,
          <>
            <div id="prompt-line">
              <span id="prompt">
                <span className="welcome">Welcome</span>@aeliyadevs:-$
              </span>
              <span className="path">~/</span>
              <input type="text" value={command} disabled={true} />
            </div>
            <div className="output-content">
              {bio.map((data, index) => (
                <>
                  <div key={index} className="item">
                    <div className="item-name">{data.name}</div>
                    <div>{data.description}</div>
                  </div>
                  <br />
                </>
              ))}
            </div>
          </>,
        ]);
        break;

      case "skills":
        setOutputSection([
          ...outputSection,
          <>
            <div id="prompt-line">
              <span id="prompt">
                <span className="welcome">Welcome</span>@aeliyadevs:-$
              </span>
              <span className="path">~/</span>
              <input type="text" value={command} disabled={true} />
            </div>
            <div className="output-content">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="item">
                  <div className="item-name">{skill.name}</div>
                  <div>{skill.description}</div>
                </div>
              ))}
            </div>
          </>,
        ]);
        break;

      case "exp":
        setOutputSection([
          ...outputSection,
          <>
            <div id="prompt-line">
              <span id="prompt">
                <span className="welcome">Welcome</span>@aeliyadevs:-$
              </span>
              <span className="path">~/</span>
              <input type="text" value={command} disabled={true} />
            </div>
            <div className="output-content">
              {experiences.map((exp, index) => (
                <>
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
                  <br />
                </>
              ))}
            </div>
          </>,
        ]);
        break;

      case "edu":
        setOutputSection([
          ...outputSection,
          <>
            <div id="prompt-line">
              <span id="prompt">
                <span className="welcome">Welcome</span>@aeliyadevs:-$
              </span>
              <span className="path">~/</span>
              <input type="text" value={command} disabled={true} />
            </div>
            <div className="output-content">
              {education.map((edu, index) => (
                <>
                  <div key={index} className="item">
                    <div className="item-name">{edu.level}</div>
                    <div>
                      <span>
                        <strong>
                          <em>{edu.institute}</em>
                        </strong>
                        <br />
                        {edu.address}
                        <br />
                        Passed Year - {edu.passedYear}
                      </span>
                    </div>
                  </div>
                  <br />
                </>
              ))}
            </div>
          </>,
        ]);
        break;

      case "projects":
        setOutputSection([
          ...outputSection,
          <>
            <div id="prompt-line">
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
                    <br />
                    <hr />
                  </div>
                </div>
              ))}
            </div>
          </>,
        ]);
        break;

      case "contact":
        setOutput([...output, command]);
        setOutputSection([
          ...outputSection,
          <>
            <div id="prompt-line">
              <span id="prompt">
                <span className="welcome">Welcome</span>@aeliyadevs:-$
              </span>
              <span className="path">~/</span>
              <input type="text" value={command} disabled={true} />
            </div>
            <div className="output-content">
              {contactInfo.map((contact, index) => (
                <div key={index} className="item">
                  <div className="item-name">{contact.name}</div>
                  <div>{contact.description}</div>
                </div>
              ))}
            </div>
          </>,
        ]);
        break;

      case "resume":
        setOutput([...output, command]);
        setOutputSection([
          ...outputSection,
          <>
            <div id="prompt-line">
              <span id="prompt">
                <span className="welcome">Welcome</span>@aeliyadevs:-$
              </span>
              <span className="path">~/</span>
              <input type="text" value={command} disabled={true} />
            </div>
            <div className="output-content">
              <div className="item">
                <div className="item-name">Resume Download</div>
                <div>
                  <a href={resume} target="_blank">
                    Click here
                  </a>{" "}
                  to download resume.
                </div>
              </div>
            </div>
          </>,
        ]);
        break;

      case "clear":
        setOutput([]);
        setOutputSection([]);
        break;

      case "":
        setOutputSection([
          ...outputSection,
          <>
            <div id="prompt-line">
              <span id="prompt">
                <span className="welcome">Welcome</span>@aeliyadevs:-$
              </span>
              <span className="path">~/</span>
              <input type="text" value={command} disabled={true} />
            </div>
          </>,
        ]);
        break;

      case "exit":
        setOutputSection([
          ...outputSection,
          <>
            <div id="prompt-line">
              <span id="prompt">
                <span className="welcome">Welcome</span>@aeliyadevs:-$
              </span>
              <span className="path">~/</span>
              <input type="text" value={command} disabled={true} />
            </div>
            <div className="output-content">
              <div className="item">
                <div>
                  Thank you for visiting my portfolio site, and bye for now!{" "}
                  <br />
                  👋👋👋
                </div>
              </div>
            </div>
          </>,
        ]);
        break;

      default:
        setOutput([...output, command]);
        setOutputSection([
          ...outputSection,
          <>
            <div id="prompt-line">
              <span id="prompt">
                <span className="welcome">Welcome</span>@aeliyadevs:-$
              </span>
              <span className="path">~/</span>
              <input type="text" value={command} disabled={true} />
            </div>
            <div className="output-content">
              Invalid Command. Please type "help" to list all the valid commands
            </div>
          </>,
        ]);
        break;
    }
  };
  return (
    <>
      <div id="output">
        {outputSection.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div id="prompt-line">
        <span id="prompt">
          <span className="welcome">Welcome</span>@aeliyadevs:-$
        </span>
        <span className="path">~/</span>
        <input
          type="text"
          value={command}
          autoFocus={true}
          onChange={(e) => {
            setCommand(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              HandleEnerKeyPress();
              setCommand("");
            }
          }}
        />
      </div>
    </>
  );
};
export default PromptComponent;
