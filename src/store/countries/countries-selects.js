export const selectCountries = (state) => ({
  list: state.countries.list.length,
  error: state.countries.error,
  status: state.countries.status,
});

export const selectAllCountries = (state) => state.countries.list;

export const selectVisibleCountries = (state, { search = "", region = "" }) => {
  return state.countries.list.filter(
    (counter) =>
      counter.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
      counter.region.includes(region)
  );
};
