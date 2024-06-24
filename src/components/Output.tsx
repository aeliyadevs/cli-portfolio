interface OutputProps {
  data: {
    name: string;
    description: string;
  };
}
const Output: React.FC<OutputProps> = ({ data }) => {
  return (
    <div className="command">
      <>
        <div className="command-name">{data.name}</div>
        <div className="command-description">{data.description}</div>
      </>
    </div>
  );
};
export default Output;
