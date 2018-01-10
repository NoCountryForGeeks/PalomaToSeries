import React from 'react';
import Episode from './seasson/Episode';
import Icon from 'webSharedComponents/Icon';
import seassonStyles from './seasson.scss';
import downArrowIcon from 'content/icons/down-arrow.svg'

const Seasson = ({ state, props: { seasson }, toogle }) => 
    <div className={ seassonStyles.seasson }>
        <div className={ seassonStyles.seassonInfoContainer }>
            <h3>Seasson { seasson.seasson }</h3>
            <div onClick={ toogle }>
                <Icon svgIcon={ downArrowIcon } className={ state.isOpen ? seassonStyles.arrowDown : seassonStyles.arrowUp } />
            </div>
        </div>
        <div>
            { state.isOpen ? seasson.episodes.map(episode => 
                <Episode 
                    key={ episode.title } 
                    episode={ episode } 
                />) : null 
            }    
        </div>
    </div>

export default Seasson;