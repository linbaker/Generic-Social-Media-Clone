import React from "react";
import Header from "./Header";
import Profile from "./Profile";

function App(){

  var globalStyling = {
    fontFamily: "Helvetica Neue"
  }
  return (
    <div style={globalStyling}>
      <Header/>
      <Profile/>
    </div>
  );
}

export default App;