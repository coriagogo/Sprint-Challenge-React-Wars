import React from 'react';


const CharCard = props => {
    return (
        <div className="card">
            <h2>{props.char.name}</h2>
            <p>
                <strong>Born: </strong>{props.char.birth_year}
            </p>
            <p>
                <strong>Gender: </strong>{props.char.gender}
            </p>            
            <p>
                <strong>Height: </strong>{props.char.height}
            </p>
            <p>
                <strong>Mass: </strong>{props.char.mass}
            </p>
            <p>
                <strong>Hair Color: </strong>{props.char.hair_color}
            </p>
            <p>
                <strong>Eye Color: </strong>{props.char.eye_color}
            </p>
            <p>
                <strong>Skin: </strong>{props.char.skin_color}
            </p>

        </div>
    )
}

export default CharCard;