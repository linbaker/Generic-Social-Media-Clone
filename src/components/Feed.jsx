import React from "react";

function Feed(){
    var feedStyles = {
        border: "2px solid lightgrey",
        fontSize: "16px",
        float: "left",
        padding: "14px",
        color: "grey"
        }

    return (
        <div>
            <button style={feedStyles}>Home</button>
            <button style={feedStyles}>Notifications</button>
            <button style={feedStyles}>Messages</button>
        </div>
        );
}

export default Feed;