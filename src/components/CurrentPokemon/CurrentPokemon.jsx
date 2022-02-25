import './CurrentPokemon.scss'

export default function CurrentPokemon(props) {
    return (
        <section className="current-pokemon">
            <img className="current-pokemon__image" />
            <h1 className="current-pokemon__name"></h1>
        </section>
    )
}