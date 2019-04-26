import React from 'react';
import CharCard from './CharCard';
import './StarWars.css';

const Chars = props => {
    return (
        <div className="Chars">
            {props.starwarsChars.map(char => (
                <CharCard  key={char.created} char={char} />
            ))} 
        </div>
    );
}

export default Chars;