import React from 'react';
import { useSetRecoilState } from 'recoil';

import { currentUserIDState } from '../atoms';

const ChangeUser = () => {
    const updateName =  useSetRecoilState(currentUserIDState);
    const onChange = ({target: {value}}) => updateName(value);
    
    return <input type="text" onChange={onChange}/>
}

export default ChangeUser;