import { useSelector, useDispatch } from "react-redux";

import { selectRegion } from "./controls-slice";

export const useRegion = () => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  return [dispatch, region];
};
