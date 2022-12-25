import { useDispatch } from "react-redux";

import { clearControls } from "./controls-slice";

export const useCleanup = () => {
  const dispatch = useDispatch();

  const clearUp = () => {
    dispatch(clearControls());
  };

  return () => dispatch(clearUp());
};
