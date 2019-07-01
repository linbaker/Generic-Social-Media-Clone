import React from "react";
import TweetBox from "./TweetBox"
import LiveFeed from "./LiveFeed"

function Feed(){
    var feedStyles = {
        gridColumnStart: "2", 
        gridColumnEnd: "3",
        gridRowStart: "1",
        gridRowEnd: "2",
        border: "2px solid lightgrey",
        fontSize: "16px",
        float: "left",
        padding: "14px",
        color: "grey"
        }

    return (
        <div style={feedStyles}>
            <TweetBox></TweetBox>
            <LiveFeed></LiveFeed>
        </div>
        );
}

export default Feed;