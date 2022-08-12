import React from "react";


export default function Card({image,name,species,origin}){

    return(
        <div>
            <div>
                <img style={{width:'300px',height:'auto'}} src={image} alt={name}></img>
            </div>
            <div>
                {name}
            </div>
            <div>
                {species}
            </div>
            <div>
                {origin}
            </div>
        </div>
    )
}