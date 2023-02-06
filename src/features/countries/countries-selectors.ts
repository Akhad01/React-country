import { RootState } from "store";

export const selectCountries = (state: RootState) => ({
  list: state.countries.list.length,
  error: state.countries.error,
  status: state.countries.status,
});

export const selectAllCountries = (state: RootState) => state.countries.list;

export const selectVisibleCountries = (
  state: RootState,
  { search = "", region = "" }
) => {
  return state.countries.list.filter(
    (country) =>
      country.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
      country.region.includes(region)
  );
};
