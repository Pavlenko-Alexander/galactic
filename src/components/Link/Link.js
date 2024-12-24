import React from "react";
import "./Link.scss";

function Link({ title }) {
  return (
    <a className="link" href="/">
      {title}
    </a>
  );
}

export default Link;
