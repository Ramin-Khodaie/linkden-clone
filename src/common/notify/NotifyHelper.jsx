import React, { useContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { NotifyContext } from "./NotifyContext";




const NotifyHelper = () => {
  const context = useContext(NotifyContext);

  
  const [state, setState] = useState({ message: "", open: false });

  const show = (message) => {
    setState({ message: message, open: true });
  };

  const handleClose = () => {
    setState({ message: "", open: false });
  };
  context.notify = show;

  
  return (
    <React.Fragment>
      <Snackbar        
        message={state.message}
        open={state.open}
        autoHideDuration={6000}
        onClose={handleClose}
        sx={{bgcolor:"white"}}
      />
    </React.Fragment>
  );
};

export default NotifyHelper;
