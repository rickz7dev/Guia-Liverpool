import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import fotoLiverpool from '../../assets/liverpool.jpg';

function Home() {
  return (
    <div className={styles.home}>
      <img className={styles.banner} src={fotoLiverpool} alt="Liverpool" />

      <div className={styles.texto}>
        <h1>Bem-vindo ao Guia Liverpool!</h1>
        <p>
          Esse site é um guia para quem vai fazer intercâmbio em Liverpool, na Inglaterra.
          Aqui você encontra os principais lugares para conhecer na cidade e algumas dicas
          para se virar bem nas primeiras semanas.
        </p>
        <p>
          Liverpool é uma cidade conhecida pelos Beatles, pelo futebol e pelo seu porto.
          É uma cidade de tamanho médio, dá pra fazer muita coisa a pé e é ótima para estudantes.
        </p>

        <div className={styles.botoes}>
          <Link className={styles.botao} to="/lugares">Ver lugares</Link>
          <Link className={styles.botao} to="/dicas">Ver dicas</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
