import React from "react";
import HeaderList from "./headerList/HeaderList";
import { HeaderContainer } from "./HeaderStyled";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <a className="header-logo" href="./">
          4Digit
        </a>
        <HeaderList />
      </HeaderContainer>
    </>
  );
};

export default Header;
