import CurrentPokemon from "../CurrentPokemon/CurrentPokemon";
import PokemonList from "../PokemonList/PokemonList";
import './Main.scss';


export default function Main({ pokedex, currentPokemon, handlePokemonChange }) {
    return (
        <main className="pokedex">
            <CurrentPokemon
            currentPokemon={currentPokemon}
            />
            <div className="pokedex__list-container">
                <PokemonList 
                pokedex={pokedex}
                currentPokemon={currentPokemon}
                handlePokemonChange={handlePokemonChange}
                />
            </div>
        </main>
    )
}