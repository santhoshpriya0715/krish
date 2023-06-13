import { createContext, useContext } from 'react';
export const PopupContext = createContext({
  component: null,
  isVisiable: false,
  open(item) { },
});
export const usePopupContext = () => useContext(PopupContext);
