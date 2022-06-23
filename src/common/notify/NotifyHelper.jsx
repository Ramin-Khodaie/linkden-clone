import React, { forwardRef, useContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { SnackbarContent } from "@mui/material";
import { NotifyContext } from "./NotifyContext";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Stack, Typography } from "@mui/material";

const NotifyHelper = () => {
  const context = useContext(NotifyContext);

  const [state, setState] = useState({
    message: "",
    open: false,
    variant: "success",
  });

  const show = (message, variant) => {
    setState({ message: message, open: true, variant: variant });
  };

  const handleClose = () => {
    setState({ message: "", open: false });
  };
  context.notify = show;

  const Snacklcontent = forwardRef((props, ref) => {
    const { variant, message } = props;
    console.log(636, variant, message);
    return (
      <SnackbarContent
        ref={ref}
        style={{ backgroundColor: `${variant === "success" ? "green" : ""}` }}
        message={message}
        sx={{fontSize:"14px",fontFamily:"inherit",  fontWeight:"600"}}
      >
        
      </SnackbarContent>
    );
  });
  return (
    <React.Fragment>
      <Stack>
        <Snackbar
          // message={state.message}
          open={state.open}
          autoHideDuration={6000}
          onClose={handleClose}
          // sx={{ bgcolor: "white" }}
        >
          <Snacklcontent message={state.message} variant={state.variant} />
        </Snackbar>
      </Stack>
    </React.Fragment>
  );
};

export default NotifyHelper;
