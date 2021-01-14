import React from "react";
import { FormControl } from "react-bootstrap";

const SearchBar = (props) => {
  return (
    <FormControl
      type="text"
      placeholder="Search"
      className="inline mr-sm-2"
      value={props.search}
      onChange={props.handleSearch}
    />
  );
};

export default SearchBar;
