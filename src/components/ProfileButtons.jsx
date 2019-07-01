import React from "react";

function ProfileButtons(){
    var profileButtonStyles = {
            color: "grey",
            textAlign: "center"
        }

    return (
        <div style={profileButtonStyles}>
            <a>TWEETS </a> 
            <a>FOLLOWING </a> 
            <a>FOLOLOWERS</a>
        </div>
        );
}

export default ProfileButtons;