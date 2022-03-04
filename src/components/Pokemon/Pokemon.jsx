import './Pokemon.scss'

export default function Pokemon({ id, name, number, handlePokemonChange }) {
    return (
        <li className="pokemon">
            <p>
                #{number}
            </p>
            <a 
            className='pokemon__link'
            onClick={() => {
                handlePokemonChange(id)
            }}
            href="#root">
                {name}
            </a>
        </li>
    )
}