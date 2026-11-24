import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Guia Liverpool</h2>
      <ul className={styles.lista}>
        <li><Link className={styles.link} to="/">Home</Link></li>
        <li><Link className={styles.link} to="/lugares">Lugares</Link></li>
        <li><Link className={styles.link} to="/dicas">Dicas</Link></li>
        <li><Link className={styles.link} to="/sobre">Sobre</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
