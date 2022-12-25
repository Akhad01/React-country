import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { Info } from "./Info";
import { selectDetails } from "./details-slice";
import { loadСountriesByName } from "./details-slice";
import { clearDetails } from "./details-slice";

const CountryDetails = ({ name, navigate }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadСountriesByName(name));
    return () => dispatch(clearDetails());
  }, [dispatch, name]);

  const { currentCountry, status, error } = useSelector(selectDetails);

  return (
    <>
      {status === "loading" && <h3>Loading...</h3>}
      {status === "rejected" && <h3>{error}</h3>}

      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};

export default CountryDetails;
