import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "store";
import { selectNeighbours } from "./details-selectors";
import { loadNeighboursСountriesByName } from "./details-slice";

export const useNeighbours = (borders: string[] = []) => {
  const dispatch = useAppDispatch();
  const neighbours = useSelector(selectNeighbours);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighboursСountriesByName(borders));
    }
  }, [dispatch, borders]);

  return neighbours;
};
