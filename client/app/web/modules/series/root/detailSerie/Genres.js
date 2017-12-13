import React from 'react';
import Genre from './genres/Genre';

const Genres = ({ genres }) =>
    <div>
        { genres.map(genre => 
            <Genre 
                key={ genre.person.name } 
                genre={ genre } 
            />)
        }
    </div>

export default Genres;