import React from "react";
import PropTypes from "prop-types";
import { FilterStyled } from "./FilterStyled";

const Filter = ({ handleInputChange }) => {
  return (
    <FilterStyled>
      <label className="labelFilter">
        Find contacts by name:
        <input className="inputFilter" type="text" name="filter" onChange={handleInputChange} />
      </label>
    </FilterStyled>
  );
};

Filter.propTypes = {
  handleInputChange: PropTypes.func,
};
export default Filter;
