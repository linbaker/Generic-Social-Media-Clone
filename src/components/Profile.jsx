import React from "react";
import Info from "./Info";
import Bio from "./Bio";

function Profile() {
    var profileStyles = {
        
    }
    return (
        <div style={profileStyles}>
            <Info></Info>
            <Bio></Bio>
        </div>
    );
}

export default Profile;