import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { fontSizeState, fontSizeLabelState } from '../atoms';

function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <div>
      <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>
        Click to Enlarge
      </button>

      <p>{fontSizeLabel}</p>
    </div>
  );
}

export default FontButton;