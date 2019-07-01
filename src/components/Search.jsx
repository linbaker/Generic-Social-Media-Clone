import React from "react";

function Search(){
    var searchbarStyles = {
        borderRadius: "25px",
        border: "2px solid lightblue",
        fontSize: "20px",
        float: "right",
        padding: "5px",
        margin: "7px"
        }

    return (
        <input style={searchbarStyles} type="text" placeholder="Search..."/>
    );
}

export default Search;