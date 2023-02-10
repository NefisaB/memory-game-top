import Card from "./Card";

export default function Main({ pokemons , handleCardClick}) {

    const cards = pokemons.map(pokemon => {
        return (
            <Card 
            pokemon={pokemon} key={pokemon} handleCardClick={handleCardClick} />
        );
    });

    
    return (
        <div className="main">
            {cards}
        </div>
    );
}