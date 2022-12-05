export const selectCountries = (state) => ({
  list: state.countries.list.length,
  error: state.countries.error,
  status: state.countries.status,
});

export const selectAllCountries = (state) => state.countries.list;
