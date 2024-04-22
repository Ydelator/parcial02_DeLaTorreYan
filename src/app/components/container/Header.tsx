import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/img/Disco.png'

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body text-light"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="" style={{height:"50px"}}/>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/songcre">
                Canciones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="*">
                Acerca De
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
