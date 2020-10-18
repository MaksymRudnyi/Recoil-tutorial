import React from 'react';
import {useRecoilValue } from 'recoil';

import { moviesInfoQuery } from '../atoms';

function UserMovies() {
    const movies = useRecoilValue(moviesInfoQuery);

    if (!movies.length) {
        return null;
    }
    
    return <div>
        {
            movies.map(movie => <p key={movie.episode_id}>{movie.title}</p>)
        }
    </div>;
  }


export default UserMovies;