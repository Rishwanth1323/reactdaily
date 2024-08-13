import React from "react";

export const Heading = (props) =>{
    const {size:s,content} = props;
    return (
        React.createElement(`h${s}`,null,content)
    )
}