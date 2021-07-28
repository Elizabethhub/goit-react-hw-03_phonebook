import React from "react";
import PropTypes from "prop-types";
import { SectionStyled } from "./SectionStyled";

const Section = ({ children, title }) => {
  return (
    <SectionStyled>
      <h2 className="sectionTitle">{title.toUpperCase()}</h2>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
