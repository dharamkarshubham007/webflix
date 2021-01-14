import React from "react";
import { FormControl } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";

const ActionBar = (props) => {
  return (
    <div className="container">
      <div className="row d-flex flex-row justify-content-between mt-5 ml-auto">
        <div className="d-inline-flex">
          <SearchBar search={props.search} handleSearch={props.handleSearch} />
        </div>
        <div className="mr-5">
          <FormControl as="select" onChange={props.handleSort}>
            <option value="0">Clear Sort</option>
            <option value="1">Sort by year in descending order</option>
            <option value="2">Sort by year in ascending order</option>
            <option value="3">Sort by title in descending order</option>
            <option value="4">Sort by title in ascending order</option>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
