//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import reactdom from "react-dom";

reactdom.render(
  <div>
    <h1>Hello World</h1>
    <ul>
      <li>My Name is vishwas srivastava</li>
      <li>Studies at gcet </li>
      <li>loves to play bb</li>
    </ul>
  </div>,
  document.getElementById("root")
);
