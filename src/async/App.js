import React from 'react';
import { useRecoilValue } from 'recoil';

import { currentUserIDState, moviesInfoQuery } from '../atoms';

import CurrentUserInfo from './CurrentUserInfo';
import ChangeUser from './ChangeUser';
import UserMovies from './UserMovies';

const AsyncApp = () => {
    const currentUserId = useRecoilValue(currentUserIDState);
    

    return (
        <div>
            <p>User id: {currentUserId}</p>
            <ChangeUser/>
            <React.Suspense fallback={<div>Loading...</div>}>
                <CurrentUserInfo/>
            </React.Suspense>
            <React.Suspense fallback={<div>Loading22...</div>}>
                <UserMovies/>
            </React.Suspense>
        </div>
    )
}

export default AsyncApp;
