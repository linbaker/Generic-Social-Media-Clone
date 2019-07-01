import React from "react";

function TweetButton(){
    var tweetButtonStyles = {
        borderRadius: "25px",
        border: "2px solid lightblue",
        fontSize: "20px",
        float: "right"
        }

    return (
        <button style={tweetButtonStyles}>Tweet</button>
    );
}

export default TweetButton;