import React from "react";
import SeriesItem from "../SeriesItem/SeriesItem";
const Series = ({ seriesList }) => {
  return (
    <>
      {seriesList.length > 0 &&
        seriesList.map((series) => {
          return <SeriesItem series={series} key={series.title} />;
        })}
    </>
  );
};
export default Series;
