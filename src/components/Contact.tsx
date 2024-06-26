interface ContactComponentProps {
  command: string;
}

const Contact: React.FC<ContactComponentProps> = ({ command }) => {
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
            <div>{contact.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Contact;
