import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTheme } from "./theme-slice";

export const useTheme = () => {
  const dispatch = useDispatch();

  const handleChange = () => {
    const next = theme === "light" ? "dark" : "light";
    dispatch(setTheme(next));
  };

  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [handleChange, theme];
};
