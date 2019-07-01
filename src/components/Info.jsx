import React from "react";
import ProfileButtons from "./ProfileButtons";

function Info() {
    var infoStyles = {
        border: "2px solid lightgrey"
    }
    return (
        <div style={infoStyles}>
            <ProfileButtons></ProfileButtons>
        </div>
    );
}

export default Info;