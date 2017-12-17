import React from 'react';
import characterStyles from './character.scss';
import Icon from '../../../../shared/Icon';
import exchageIcon from '../../../../../../content/icons/exchange.svg';

const Character = ({ character }) =>
    <div className={ characterStyles.character }>
        <div>
            <img src={ character.person.image.medium } alt={ character.person.name } />
            <span>{ character.person.name }</span>
        </div>
        <Icon svgIcon={ exchageIcon }/>
        <div>
            <img src={ character.character.image.medium } alt={ character.character.name } />
            <span>{ character.character.name }</span>
        </div>
    </div>

export default Character;