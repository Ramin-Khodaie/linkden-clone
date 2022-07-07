import { IconButton, Tooltip } from "@mui/material";
import './CustomIconButton.css'

const CustomIconButton = ({ Icon, size, tooltip, handleClick }) => {
  return (
    <div className="iconbutton">
      <Tooltip placement="top-start" title={tooltip}>
        <IconButton size={size} onClick={handleClick}>
          <Icon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default CustomIconButton;
