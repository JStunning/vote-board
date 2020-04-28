import React from "react";
import Header from "./Header";
import PostControl from "./PostControl";

function App(){
  return ( 
    <React.Fragment>
      <div id="Header">
        <Header />
      </div>
      <div id="PostControl">
        <PostControl />
      </div>
    </React.Fragment>
  );
}

export default App;
