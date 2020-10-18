import React from 'react';
import { useRecoilState } from 'recoil';

import { fontSizeState } from '../atoms';

function Text() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    return <p style={{fontSize}}>This text will increase in size too. Size: {fontSize}</p>;
  }

  export default Text;