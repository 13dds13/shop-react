import data from "../../../data/index";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = () => {
  return (
    <HeaderListStyled>
      {data.header.map((headerItem) => (
        <li className="headerListStyled-item" key={headerItem}>
          {headerItem}
        </li>
      ))}
    </HeaderListStyled>
  );
};

export default HeaderList;
