import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Feed from "./Feed";
import Suggested from "./Suggested";

function App() {

  var globalStyling = {
    fontFamily: "Helvetica Neue",
    display: "grid"
  }
  return (
    <div style={globalStyling}>
      <Header />
          <Profile />
          <Feed />

          <Suggested />
 
    </div>
  );
}

export default App;