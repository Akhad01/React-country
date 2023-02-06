import { useSelector } from "react-redux";
import { SingleValue } from "react-select";
import { useAppDispatch } from "store";
import { Region } from "types/region";
import { selectRegion } from "./controls-selectors";
import { setRegion } from "./controls-slice";
import { CountryOption } from "./CustomSelect";

type OnSelect = (reg: SingleValue<CountryOption>) => void;

export const useRegion = (): [OnSelect, Region | ""] => {
  const dispatch = useAppDispatch();
  const region = useSelector(selectRegion);

  const handleRegion: OnSelect = (reg) => {
    if (reg) {
      dispatch(setRegion(reg.value));
    } else {
      dispatch(setRegion(""));
    }
  };

  return [handleRegion, region];
};
