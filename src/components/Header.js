export default function Header({score, max}) {
    

    return (
        <div className="header">
            <div className="score">Current score: {score}</div>
            <div className="max">Max score: {max}</div>
        </div>
    );
}