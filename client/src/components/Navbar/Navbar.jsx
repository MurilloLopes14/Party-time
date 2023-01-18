//* Styles
import { NavbarStyle } from "./NavbarStyle";

//* Components
import { NavLink } from "react-router-dom";

export const Navbar = ({ themeToggler }) => {
  return (
    <>
      <NavbarStyle>
        <h2>Party Time!</h2>
        <ul>
          <li>
            <NavLink to={`/`}>Minhas Festas</NavLink>
            <NavLink to={`/party/new`}>Criar Festa</NavLink>
          </li>
        </ul>
        <button onClick={themeToggler}>Switch Theme</button>
      </NavbarStyle>
    </>
  );
};
