import {useState } from "react"
import axios from 'axios';
const Poke = () => {


const [allPokemon, setAllPokemon] = useState();
    const AxiosPokemon = () => {
        /*Listar 807 registros de la API pokemon*/
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => {
                console.log(res) 
                setAllPokemon(res.data.results)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container w-25 border border-2 p-3">
        <button onClick={AxiosPokemon} className='btn btn-success'>Axios Pokemon</button>
        <h3>Resultado : </h3>
        <div className="list-group list-group-numbered">
            <ul>
                {
                    allPokemon &&
                    allPokemon.map((pokemon, index) => {
                        return (
                            <li key={index}>{pokemon.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
    );
}
export default Poke;