import React from "react";

function Bio(){
    var bioStyles = {
        border: "2px solid lightgrey",
        float: "left",
        border: "2px solid lightgrey",
        width: "30vw",
        marginTop: "2vh",
        height: "38vh",
        color: "grey"
        }
    var bioText = {
        padding: "3%",
        lineHeight: "1.5",
        fontSize: "16"
        }

    return (
        <div style={bioStyles}>
            <p style={bioText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo a mollitia voluptas illum temporibus, distinctio ab doloremque dignissimos, explicabo, laudantium officia magni sit inventore tempora in qui fuga molestiae?</p>
        </div>
        );
}

export default Bio;