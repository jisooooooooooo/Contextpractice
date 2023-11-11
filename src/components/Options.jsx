import React from "react";

const Options = ({name}) => {
  return (
    <form>
      <input type="checkbox" id="option" />
      <label htmlFor="option">{name}</label>
    </form>
  );
};

export default Options;
