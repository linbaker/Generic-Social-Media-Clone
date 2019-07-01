import React from "react";
import Search from "./Search";
import TweetButton from "./TweetButton";
import Tabs from "./Tabs";

function Header() {
    var headerStyles = {
        borderBottom: "2px solid lightgrey",
    }
    return (
        <div style={headerStyles}>
            <Tabs></Tabs>
            <TweetButton></TweetButton>
            <Search></Search>
            <br></br><br></br><br></br><br></br>
        </div>
    );
}

export default Header;