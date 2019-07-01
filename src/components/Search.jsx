import React from "react";

function Search(){
    var searchbarStyles = {
        borderRadius: "25px",
        border: "2px solid lightblue",
        fontSize: "20px",
        float: "right",
        }

    return (
        <input style={searchbarStyles} type="text" placeholder="Search..."/>
    );
}

export default Search;