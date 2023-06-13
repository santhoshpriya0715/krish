import React, { useState } from 'react';
import PopupComponent from './PopupComponent';
import { PopupContext } from './PopupContext';


const PopupRoot = ({ children }) => {
  const [component, setComponent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PopupContext.Provider
      value={{
        component: component,
        isVisiable: isOpen,
        open(item) {
          setComponent(item);
          setIsOpen(true);
        },
        hide() {
          setIsOpen(false);
        },
      }}>
      <PopupComponent children={children} />
    </PopupContext.Provider>
  );
};

export default PopupRoot;

