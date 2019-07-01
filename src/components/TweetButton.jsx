import React from "react";

function TweetButton(){
    var tweetButtonStyles = {
        borderRadius: "25px",
        border: "2px solid #4B7EBF",
        fontSize: "20px",
        padding: "5px",
        float: "right",
        margin: "7px",
        color: "grey",
        paddingLeft: "20px",
        paddingRight: "20px"

        }

    return (
        <button style={tweetButtonStyles}>Tweet</button>
    );
}

export default TweetButton;