import React from "react";
import { useState } from "react";
import Card from "../Card";

export default function Create(){

    const [nuevo,setNuevo]=useState({
        name:'',
        image:'',
        species:'',
        origin:'',
    });

    const [persCreados,setPersCreados]=useState([]);

    function onChange(e) {
        setNuevo(prevState=>{
            return{...prevState,
            [e.target.name]: e.target.value}
        }
        )
    }
    function onSubmit(e){
        e.preventDefault();
        setPersCreados(prevState=>[...prevState,nuevo]);
        setNuevo({
            name:'',
            image:'',
            species:'',
            origin:'',
        })
    }


    return(
        <div>

            <form onSubmit={onSubmit}>
                <input onChange={onChange} name="name" value={nuevo.name} placeholder="nombre"></input>
                <input onChange={onChange} name="image" value={nuevo.image} placeholder="imagen"></input>
                <input onChange={onChange} name="species" value={nuevo.species} placeholder="especie"></input>
                <input onChange={onChange} name="origin" value={nuevo.origin} placeholder="origen"></input>
                <button type="submit">CREATE</button>
            </form>
            <Card
            image={nuevo.image}
            name={nuevo.name}
            origin={nuevo.origin}
            species={nuevo.species}
            />
            <hr></hr>
            {persCreados?persCreados.map(p=><Card key={p.name} name={p.name} image={p.image} origin={p.origin} species={p.species}></Card>):
            <div>TODAVIA NO SE CREO NINGUN PERSONAJE</div>}
        </div>
    )
}