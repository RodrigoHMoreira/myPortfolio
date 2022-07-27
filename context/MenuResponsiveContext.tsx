import React from "react";
import { createContext, ReactNode,useState } from "react";

type MenuResponsiveContextProps = {
  children: ReactNode;
};

type MenuResponsiveContextType = {
  toggleMenuResponsive: boolean;
  setToggleMenuResponsive: (newState: boolean) => void;
  handleMenuResponsive: () => void;
};

const MenuResponsiveContextValue = {
  toggleMenuResponsive: false,
  setToggleMenuResponsive: () => {},
  handleMenuResponsive: () => {},
};

export const MenuResponsiveContext = createContext<MenuResponsiveContextType>(
  MenuResponsiveContextValue
);

const MenuResponsiveContextProvider = ({
  children,
}: MenuResponsiveContextProps) => {
  const [toggleMenuResponsive, setToggleMenuResponsive] = useState(
    MenuResponsiveContextValue.toggleMenuResponsive
  );

  const handleMenuResponsive = () => {
    setToggleMenuResponsive(!toggleMenuResponsive);
    console.log(toggleMenuResponsive);
  };

  return (
    <MenuResponsiveContext.Provider
      value={{
        toggleMenuResponsive,
        setToggleMenuResponsive,
        handleMenuResponsive,
      }}
    >
      {children}
    </MenuResponsiveContext.Provider>
  );
};

export default MenuResponsiveContextProvider;
