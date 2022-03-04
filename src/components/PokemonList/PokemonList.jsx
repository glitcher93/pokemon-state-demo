import Pokemon from "../Pokemon/Pokemon"
import './PokemonList.scss'


export default function PokemonList({ pokedex, currentPokemon, handlePokemonChange }) {
    return (
        <section className="pokemon-list">
            <h2 className="pokemon-list__heading">Pokedex</h2>
            <ul className="pokemon-list__list">
                {pokedex
                    .filter(pokemon => pokemon.id !== currentPokemon.id)
                    .map(pokemon => {
                        return (
                            <Pokemon
                            key={pokemon.id}
                            id={pokemon.id}
                            number={pokemon.id}
                            name={pokemon.name.english}
                            handlePokemonChange={handlePokemonChange}
                            />
                        )
                })}
            </ul>
        </section>
    )
}