import { createStore } from "redux";
import { SeriesReducer } from "./Reducers/SeriesReducer";

export const store = createStore(SeriesReducer);
