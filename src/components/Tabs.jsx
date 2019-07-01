import React from "react";

function Tabs(){
    var tabsStyles = {
        border: "2px solid lightgrey",
        fontSize: "20px",
        float: "left"
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