import "./InputOption.css";

const InputOption = ({ Icon, title, color, onClick, likeNumbers }) => {
  return (
    <div className="inputOption" onClick={onClick}>      
      <Icon style={{ color: color }} />
      <h4 style={{color:color}}>{title}</h4>
    </div>
  );
};

export default InputOption;
