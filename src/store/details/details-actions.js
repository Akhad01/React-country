export const SET_ERROR = "@@details/SET_ERROR";
export const SET_LOADING = "@@details/SET_LOADING";
export const SET_COUNTRY = "@@details/SET_CURRENT";
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS";
export const SET_NEIGHBOURS = "@@details/SET_NEIGHBOURS";

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

export const clearDetails = () => ({
  type: CLEAR_DETAILS,
});

export const setNeighbours = (neighbours) => ({
  type: SET_NEIGHBOURS,
  payload: neighbours,
});

export const loadСountriesByName =
  (name) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading);
    client
      .get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((error) => setError(error.message));
  };

export const loadNeighboursСountriesByName =
  (neighbours) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.filterByCode(neighbours))
      .then(({ data }) =>
        dispatch(setNeighbours(data.map((item) => item.name)))
      )
      .catch((error) => console.error(error));
  };
