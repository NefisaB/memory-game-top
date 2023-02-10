export default function Card({ pokemon, handleCardClick }) {
    return (
        <div
            className="card"
            onClick={() => handleCardClick(pokemon)}>
            <img src={`./memory-game-top/images/${pokemon}.png`} alt={pokemon} />
            <h2>{pokemon}</h2>
        </div>
    );
}