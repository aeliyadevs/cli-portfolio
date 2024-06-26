interface BioComponentProps {
  command: string;
}

const Bio: React.FC<BioComponentProps> = ({ command }) => {
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
        {bio.map((data, index) => (
          <div key={index} className="item">
            <div className="item-name">{data.name}</div>
            <div>{data.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Bio;
