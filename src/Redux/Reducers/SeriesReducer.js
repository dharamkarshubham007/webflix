import { FETCH_SERIES } from "../ActionConstants";
const initialState = {
  series: [],
};

export const SeriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERIES:
      return {
        ...state,
        series: [...action.payload.series],
      };
    default:
      return state;
  }
};
