import React from 'react';

const Row = ({title,Icon,clicked})=>{
    return(
        <div className={`row ${clicked && "clicked"}`}>
            <Icon className="row_icon"/>
            <h2 className="row_title">{title}</h2>   
        </div>
    )
}

export default Row;