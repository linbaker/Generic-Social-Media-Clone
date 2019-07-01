import React from "react";

function tabsStyles(){
    var tabstabsStylesStyles = {
        border: "2px solid lightgrey",
        fontSize: "20px",
        float: "left"
        }

    return (
        <div>
            <button style={tabstabsStylesStyles}>Home</button>
            <button style={tabstabsStylesStyles}>Notifications</button>
            <button style={tabstabsStylesStyles}>Messages</button>
        </div>
        );
}

export default tabsStyles;