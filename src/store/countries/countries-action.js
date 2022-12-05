export const SET_LOADING = "@@countries/SET_LOADING";
export const SET_ERROR = "@@countries/SET_ERROR";
export const SET_COUNTRIES = "@@countries/SET_COUNTRIES";

const setLoading = () => ({
  type: SET_LOADING,
});

const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const loadСountries =
  () =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());
    client
      .get(api.ALL_COUNTRIES)
      .then(({ data }) => dispatch(setCountries(data)))
      .catch((error) => setError(error.message));
  };
