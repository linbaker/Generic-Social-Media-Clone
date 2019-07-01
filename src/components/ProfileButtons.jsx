import React from "react";

function ProfileButtons(){
    var profileButtonStyles = {
            color: "grey",
            textAlign: "center",
            marginTop: "6vh",
            fontSize: "12"
        }
    var linkStyle = {
        marginRight: "5px"
    }

    return (
        <div style={profileButtonStyles}>
            <a style={linkStyle}>TWEETS</a> 
            <a style={linkStyle}>FOLLOWING</a> 
            <a>FOLOLOWERS</a>
        </div>
        );
}

export default ProfileButtons;