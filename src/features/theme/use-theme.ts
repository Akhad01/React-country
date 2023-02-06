import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

import { setTheme, Theme } from "./theme-slice";

export const useTheme = (): [() => void, Theme] => {
  const dispatch = useDispatch();

  const handleChange = () => {
    const next = theme === "light" ? "dark" : "light";
    dispatch(setTheme(next));
  };

  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [handleChange, theme];
};
