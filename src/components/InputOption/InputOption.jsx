import "./InputOption.css";

const InputOption = ({ Icon, title, color, onClick, likeNumbers }) => {
  return (
    <div className="inputOption" onClick={onClick}>
      {/* {likeNumbers && <span>{likeNumbers}</span>} */}
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
