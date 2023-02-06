import { NavigateFunction } from "react-router-dom";

import { Info } from "./Info";
import { useDetails } from "./use-details";

interface CountryDetailsProps {
  navigate: NavigateFunction
  name?: string;
}

const CountryDetails = ({ name = "", navigate }: CountryDetailsProps) => {
  const { status, error, currentCountry } = useDetails(name)

  return (
    <>
      {status === "loading" && <h3>Loading...</h3>}
      {status === "rejected" && <h3>{error}</h3>}

      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};

export default CountryDetails;
