import React from 'react';
import Character from './characters/Character';
import charactersStyles from './characters.scss'

const Characters = ({ characters }) =>
    <div className={ charactersStyles.characters }>
        { characters.map(character => 
            <Character 
                key={ character.person.name } 
                character={ character } 
            />)
        }
    </div>

export default Characters;