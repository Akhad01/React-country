import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { List } from "../../components/List";
import { Card } from "../../components/Card";
import { loadСountries } from "./countries-slice";
import { selectCountries } from "./countries-slice";
import { selectVisibleCountries } from "./countries-slice";
import { selectControls } from "../controls/controls-slice";

const CountryList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search, region } = useSelector(selectControls);
  const { list, error, status } = useSelector(selectCountries);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );

  useEffect(() => {
    if (!list) {
      dispatch(loadСountries());
    }
  }, [list, dispatch]);
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
