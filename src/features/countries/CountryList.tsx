import { useNavigate } from "react-router-dom";

import { List } from "components/List";
import { Card } from "components/Card";
import { useCountries } from "./use-countries"; 

const CountryList = () => {
  const navigate = useNavigate();

  const [ {error, status}, countries] = useCountries()
  
  return (
    <>
      {error && <h3>Error</h3>}

      {status === "loading" && <h3>Loading...</h3>}

      {status === "received" && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: "Population",
                  description: c.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: c.region,
                },
                {
                  title: "Capital",
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

export default CountryList;
