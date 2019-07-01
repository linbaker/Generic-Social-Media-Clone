import React from "react";
import Info from "./Info";
import ProfileButtons from "./ProfileButtons";
import Bio from "./Bio";

function Profile() {
    var profileStyles = {
        
    }
    return (
        <div style={profileStyles}>
            <Info></Info>
            <ProfileButtons></ProfileButtons>
            <Bio></Bio>
        </div>
    );
}

export default Profile;