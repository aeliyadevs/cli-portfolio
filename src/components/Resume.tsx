interface ResumeProps {
  command: string;
}

const Resume: React.FC<ResumeProps> = ({ command }) => {
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
        <div className="item">
          <div className="item-name">Resume Download</div>
          <div>
            <a href="assets/resume-aeliyadevs-2024.pdf" target="_blank">
              click here
            </a>{" "}
            to download resume.
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
