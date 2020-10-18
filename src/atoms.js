import { atom, selector } from 'recoil';

const fontSizeState = atom({
    key: 'fontSizeState',
    default: 14,
  });

const fontSizeLabelState = selector({
    key: 'fontSizeLabelState',
    get: ({get}) => {
      const fontSize = get(fontSizeState);
      const unit = 'px';
  
      return `${fontSize}${unit}`;
    },
  });

export {
    fontSizeState,
    fontSizeLabelState
}