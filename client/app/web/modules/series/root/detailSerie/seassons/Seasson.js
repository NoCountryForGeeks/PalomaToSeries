import React from 'react';
import Episode from './seasson/Episode';
import Icon from 'webSharedComponents/Icon';
import seassonStyles from './seasson.scss';
import downArrowIcon from 'content/icons/down-arrow.svg'

const Seasson = function() {
    return(
        <div className={ seassonStyles.seasson }>
            <div className={ seassonStyles.seassonInfoContainer }>
                <h3>Seasson { this.props.seasson.seasson }</h3>
                <div onClick={ this.toogle.bind(this) }>
                    <Icon svgIcon={ downArrowIcon } className={ this.state.isOpen ? seassonStyles.arrowDown : seassonStyles.arrowUp } />
                </div>
            </div>
            <div>
                { this.state.isOpen ? this.props.seasson.episodes.map(episode => 
                    <Episode 
                        key={ episode.title } 
                        episode={ episode } 
                    />) : null 
                }    
            </div>
        </div>
    )
}
export default Seasson;