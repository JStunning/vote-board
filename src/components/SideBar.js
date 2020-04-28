import React from 'react';

function SideBar(props) {
  return (
    <React.Fragment>
      <h2>Side Bar</h2>
      <hr />
      <h3><u>Rules</u></h3>
      <h4>Rule #1</h4>
      <p>this is the rule description</p>
      <h4>Rule #2</h4>
      <p>this is the rule description</p>
      <h4>Rule #3</h4>
      <p>this is the rule description</p>
      <h4>Rule #4</h4>
      <p>this is the rule description</p>
      <h4>Rule #5</h4>
      <p>this is the rule description</p>
      <hr />
      <h3>External Links</h3>
      <a href="https://github.com/">github</a><br />
      <a href="https://www.linkedin.com/">LinkedIn</a>
    </React.Fragment>
  );
}

export default SideBar;