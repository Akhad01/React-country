import { selectControls } from "features/controls/controls-selectors";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store";

import { Country } from "types/countries";
import { selectCountries, selectVisibleCountries } from "./countries-selectors";
import { loadСountries } from "./countries-slice";

export const useCountries = (): [
  ReturnType<typeof selectCountries>,
  Country[]
] => {
  const dispatch = useAppDispatch();
  const { search, region } = useSelector(selectControls);
  const { list, error, status } = useSelector(selectCountries);
  const countries = useSelector((state: RootState) =>
    selectVisibleCountries(state, { search, region })
  );

  useEffect(() => {
    if (!list) {
      dispatch(loadСountries());
    }
  }, [list, dispatch]);

  return [{ error, status, list }, countries];
};
