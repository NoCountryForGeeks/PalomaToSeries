import React from 'react';
import searchIcon from 'content/icons/magnifier.svg';
import searchStyles from './seriesSearch.scss';
import Icon from 'webSharedComponents/Icon';

const SeriesSearch = function({ state }) { 
    const { serieSearch, magnifierIcon } = searchStyles;
    return(
        <div className={ serieSearch }>
            <form onSubmit={ event => { event.preventDefault(); this.searchSeries.bind(this)() }}>
                <input 
                    type='text'
                    name='search'
                    placeholder='Search...'
                    value={ state.seach } 
                    onKeyUp={ event => this.searchHelpSeries.bind(this)(event.target.value) }
                />
                <button type="submit">
                    <Icon svgIcon={ searchIcon } className={ magnifierIcon } title='Search'/>
                </button>
            </form>
        </div>
    )
}
export default SeriesSearch;
