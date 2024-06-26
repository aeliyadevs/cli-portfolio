interface EduComponentProps {
  command: string;
}

const Education: React.FC<EduComponentProps> = ({ command }) => {
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
        {education.map((edu, index) => (
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
        ))}
      </div>
    </>
  );
};
export default Education;
