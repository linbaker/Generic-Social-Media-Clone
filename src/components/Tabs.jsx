import React from "react";

function Tabs(){
    var tabsStyles = {
        border: "2px solid lightgrey",
        fontSize: "16px",
        float: "left",
        padding: "14px",
        color: "grey"
        }

    return (
        <div>
            <button style={tabsStyles}>Home</button>
            <button style={tabsStyles}>Notifications</button>
            <button style={tabsStyles}>Messages</button>
        </div>
        );
}

export default Tabs;