import React from "react";

function ProfileButtons(){
    var profileButtonStyles = {
        border: "2px solid lightgrey",
        fontSize: "20px",
        float: "left"
        }

    return (
        <div>
            <button style={profileButtonStyles}>Home</button>
            <button style={profileButtonStyles}>Notifications</button>
            <button style={profileButtonStyles}>Messages</button>
        </div>
        );
}

export default ProfileButtons;