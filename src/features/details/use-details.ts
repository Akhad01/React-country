import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { selectDetails } from "./details-selectors";
import { clearDetails } from "./details-slice";
import { loadСountriesByName } from "./details-slice";

export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();

  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadСountriesByName(name));
    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, name]);

  return details;
};
