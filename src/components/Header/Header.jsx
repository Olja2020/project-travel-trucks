import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';
import css from './Header.module.css';

const Header = () => {
  

  return (
    <div className={css.headerSection}>
      <header className={css.headerWrapper}>
        <div>
          <Logo />
        </div>
        <div className={css.container_links}>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
            <NavLink className={css.link} to="/catalog">
              Catalog
            </NavLink>
          </div>
      </header>
    </div>
  );
};

export default Header;
