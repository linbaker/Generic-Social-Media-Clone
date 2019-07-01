import React from "react";
import Info from "./Info";
import Bio from "./Bio";

function Profile() {
    var profileStyles = {
        gridRowStart: "1",
        gridRowEnd: "2",
        gridColumnStart: "1", 
        gridColumnEnd: "2" 
    }
    return (
        <div style={profileStyles}>
            <Info></Info>
            <Bio></Bio>
        </div>
    );
}

export default Profile;