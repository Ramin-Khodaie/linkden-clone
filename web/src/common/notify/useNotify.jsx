import { useContext } from "react";
import { NotifyContext } from "./NotifyContext";

const useNotify = () => {
  const context = useContext(NotifyContext);

  const notify = (message, variant) => {
    console.log(2211, message);
    context.notify(message, variant);
  };
  return notify;
};

export default useNotify;
