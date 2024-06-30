interface ContactComponentProps {
  command: string;
}

const Contact: React.FC<ContactComponentProps> = ({ command }) => {
  const contactInfo = [
    {
      name: "Phone",
      description: "+977 9876543210",
      link: "tel:+977-9803079279",
    },
    {
      name: "email",
      description: "aeliyadevs@gmail.com",
      link: "mailto:aeliyadevs@gmail.com",
    },
    {
      name: "facebook",
      description: "facebook.com/aeliya.tamang/",
      link: "https://www.facebook.com/aeliya.tamang/",
    },
    {
      name: "linkedin",
      description: "linkedin.com/in/aeliya-tamang-808762136",
      link: "https://www.linkedin.com/in/aeliya-tamang-808762136",
    },
    {
      name: "github",
      description: "https://github.com/aeliyadevs/",
      link: "https://github.com/aeliyadevs/",
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
        {contactInfo.map((contact, index) => (
          <div key={index} className="item">
            <div className="item-name">{contact.name}</div>
            <div>
              <a href={contact.link} target="_blank">
                {contact.description}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Contact;
