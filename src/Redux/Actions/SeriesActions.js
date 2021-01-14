import { FETCH_SERIES } from "../ActionConstants";
export const fetchSeries = (series) => {
  return {
    type: FETCH_SERIES,
    payload: {
      series,
    },
  };
};
