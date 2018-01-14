import React from 'react';
import actorStyles from './actor.scss';
import Icon from 'webSharedComponents/Icon';
import exchageIcon from 'content/icons/exchange.svg';

const Actor = ({ actor: { person, character} }) => 
        <div className={ actorStyles.actor }>
            <div>
                <img src={ person.image ? person.image : null } alt={ person.name } />
                <span>{ person.name }</span>
            </div>
            <Icon svgIcon={ exchageIcon }/>
            <div>
                <img src={ character.image ? character.image : null } alt={ character.name } />
                <span>{ character.name }</span>
            </div>
        </div>

export default Actor;