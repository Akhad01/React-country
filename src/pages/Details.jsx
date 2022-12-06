import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { selectDetails } from "../store/details/details-selectors";
import { loadСountriesByName } from "../store/details/details-actions";
import { clearDetails } from "../store/details/details-actions";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadСountriesByName(name));
    return () => dispatch(clearDetails());
  }, [dispatch, name]);

  const { currentCountry, status, error } = useSelector(selectDetails);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === "loading" && <h3>Loading...</h3>}
      {status === "rejected" && <h3>{error}</h3>}

      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
