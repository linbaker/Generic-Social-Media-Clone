import React from "react";
import ProfileButtons from "./ProfileButtons";
import BlankProfilePic from './img/blank-profile.png'

function Info() {
    var infoStyles = {
        border: "2px solid lightgrey",
        height: "25vh",
        width: "300px",
    }
    var blueRectangle = {
        background: "	#4B7EBF",
        height: "60%",
        width: "100%"
    }
    var profileImage = {
        height: "8vh",
        zIndex: "1",
        position: "absolute",
        top: "16vh",
        left: "3vw",
        borderRadius: "25px",
        border: "2px solid lightgrey",
    }
    var name = {
        float: "right",
        margin: "0",
        marginRight: "10px",
        fontSize: "25",
        color: "grey"
    }
    return (
        <div style={infoStyles}>
            <div style={blueRectangle}></div>
            <p style={name}>Brian Hensley</p>
            <img style={profileImage} src={BlankProfilePic} alt="Blank Profile Picture"/>
            <ProfileButtons></ProfileButtons>
        </div>
    );
}

export default Info;