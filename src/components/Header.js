import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  const { titulo } = props;
  return (
    <header>
      <h1 className="text-center">{titulo}</h1>
    </header>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
