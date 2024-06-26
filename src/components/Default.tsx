interface DefaultCompProps {
  command: string;
}

const Default: React.FC<DefaultCompProps> = ({ command }) => {
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
        <span className="invalid">Invalid Command!</span>
        <br />
        Please type "help" to list all the valid commands
      </div>
    </>
  );
};
export default Default;
