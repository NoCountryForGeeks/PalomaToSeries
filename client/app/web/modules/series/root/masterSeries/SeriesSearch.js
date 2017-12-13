import React from 'react'

const SeriesSearch = function(state) { 
    return(
        <form onSubmit={ this.searchSeries.bind(this) }>
            <input 
                type="text"
                value={ state.seach } 
                onKeyDown={ this.searchHelpSeries.bind(this) }
            />
            <button type="submit">Search</button>
        </form>
    )
}
export default SeriesSearch;
