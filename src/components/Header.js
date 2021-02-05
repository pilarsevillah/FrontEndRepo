import { Link } from 'react-router-dom';
import logo from '../img/Logo200.png';

export default function Header() {
  return (
    <header>
      <Link to="/home">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/searcher">
        <form onSubmit="">
          <input onChange="" placeholder="depende de donde estés"></input>
          <button type="submit">ENVIAR</button>
        </form>
      </Link>
      <Link to="/Register" className="caja">
        Registro
      </Link>
      <Link to="/Login" className="caja">
        Login
      </Link>
    </header>
  );
}
