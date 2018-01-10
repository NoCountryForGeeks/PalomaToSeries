import React from 'react';
import searchIcon from 'content/icons/magnifier.svg';
import searchStyles from './seriesSearch.scss';
import Icon from 'webSharedComponents/Icon';

const SeriesSearch = ({ state, updateSearchValue, searchSeries }) => {
    const { serieSearch, magnifierIcon } = searchStyles;
    return(
        <div className={ serieSearch }>
            <form onSubmit={ event => { event.preventDefault(); searchSeries() }}>
                <input 
                    type='text'
                    name='search'
                    placeholder='Search...'
                    value={ state.seach } 
                    onKeyUp={ event => updateSearchValue(event.target.value) }
                />
                <button type="submit">
                    <Icon svgIcon={ searchIcon } className={ magnifierIcon } title='Search'/>
                </button>
            </form>
        </div>
    )
}
export default SeriesSearch;
