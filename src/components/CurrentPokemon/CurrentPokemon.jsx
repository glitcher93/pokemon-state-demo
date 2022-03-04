import './CurrentPokemon.scss'

export default function CurrentPokemon({ currentPokemon }) {
    return (
        <section className="current-pokemon">
            <img className="current-pokemon__image"
            src={currentPokemon.img}
            alt={currentPokemon.name.english}
            />
            <h1 className="current-pokemon__name">
                {currentPokemon.name.english}
            </h1>
        </section>
    )
}