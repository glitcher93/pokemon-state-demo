import Pokemon from "../Pokemon/Pokemon"
import './PokemonList.scss'


export default function PokemonList() {
    return (
        <section className="pokemon-list">
            <h2 className="pokemon-list__heading">Pokedex</h2>
            <ul className="pokemon-list__list">
            </ul>
        </section>
    )
}