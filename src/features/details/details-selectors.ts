import { RootState } from "store";

export const selectDetails = (state: RootState) => state.details;
export const selectNeighbours = (state: RootState) => state.details.neighbours;
