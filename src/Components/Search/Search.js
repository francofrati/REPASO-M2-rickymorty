import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card";

export default function Search() {

    const [personajes, setPersonajes] = useState([]);
    const [inp, setInp] = useState('');
    const [personaje, setPersonaje] = useState(undefined);

    useEffect(() => {
        if (personajes.length === 0) {
            fetch('https://rickandmortyapi.com/api/character')
                .then(r => r.json())
                .then(personajes => {
                    setPersonajes(personajes.results)
                })
        }
        // console.log(personajes) es para ver el arreglo de personajes traido desde la API se Rick y Morty
    }, [personajes]);

    // useEffect(() => {     esto solo era para ver que se estaba actualizando el input de busqueda
    //     console.log(inp)
    // }, [inp]);

    function onChange(e) {
        setInp(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        const perso = personajes.find(p=>p.name.toLowerCase().includes(inp.toLocaleLowerCase()));
        setPersonaje(perso);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name='pers' type={'text'} onChange={onChange} value={inp}></input>
                <button type="submit">Buscar</button>
            </form>
            {personaje === undefined ? <span>No se encuentra personaje</span> :
                <Card image={personaje.image}
                    name={personaje.name}
                    species={personaje.species}
                    origin={personaje.origin.name}
                ></Card>
            }
        </div>
    )
}