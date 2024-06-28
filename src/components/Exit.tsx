interface ExitProps {
  command: string;
}

const Exit: React.FC<ExitProps> = ({ command }) => {
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
        Thank you for visiting my portfolio site, and bye for now! <br />
        👋👋👋
        <br />
        Exiting ......
      </div>
    </>
  );
};
export default Exit;
