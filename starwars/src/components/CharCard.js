import React from 'react';

const CharCard = props => {
    return (
        <div className="card">
            <h2>{props.starwarsChar.name}</h2>
            <p>
                <strong>Born: </strong>{props.starwarsChar.birth_year}
            </p>
            <p>
                <strong>Gender: </strong>{props.starwarsChar.gender}
            </p>
            <p>
                <strong> Home World: </strong>{props.starwarsChar.homeworld.name}
            </p>
            <p>
                <strong>Height: </strong>{props.starwarsChar.height}
            </p>
            <p>
                <strong>Mass: </strong>{props.starwarsChar.mass}
            </p>
            <p>
                <strong>Hair Color: </strong>{props.starwarsChar.hair_color}
            </p>
            <p>
                <strong>Eye Color: </strong>{props.starwarsChar.eye_color}
            </p>
            <p>
                <strong>Skin: </strong>{props.starwarsChar.skin_color}
            </p>
            
        </div>
    )
}