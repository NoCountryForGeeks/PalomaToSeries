import React from 'react';
import searchIcon from '../../../../../content/icons/magnifier.svg';
import searchStyles from './seriesSearch.scss';
import Icon from '../../../shared/Icon';

const SeriesSearch = function({ state }) { 
    const { serieSearch, magnifierIcon } = searchStyles;
    return(
        <div className={ serieSearch }>
            <form onSubmit={ this.searchSeries.bind(this) }>
                <input 
                    type='text'
                    name='search'
                    placeholder='Search...'
                    value={ state.seach } 
                    onKeyDown={ this.searchHelpSeries.bind(this) }
                />
                <button type="submit">
                    <Icon svgIcon={ searchIcon } className={ magnifierIcon } title='Search'/>
                </button>
            </form>
        </div>
    )
}
export default SeriesSearch;
