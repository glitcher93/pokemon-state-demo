import CurrentPokemon from "../CurrentPokemon/CurrentPokemon";
import PokemonList from "../PokemonList/PokemonList";
import './Main.scss';


export default function Main() {
    return (
        <main className="pokedex">
            <CurrentPokemon />
            <div className="pokedex__list-container">
                <PokemonList />
            </div>
        </main>
    )
}