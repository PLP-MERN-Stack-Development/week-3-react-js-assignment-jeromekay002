import React from "react";
import PropTypes from "prop-types";

function Card({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-lg shadow-md p-4 transition-all transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-orange-400 duration-300 ease-in-out ${className}`}
    >
      <h3 className="text-lg font-semibold mb-2 text-orange-700 dark:text-orange-300">
        {title}
      </h3>
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
