import styles from './Lugares.module.css';
import CardLugar from '../../components/CardLugar/CardLugar';

import albertDock from '../../assets/albert-dock.jpg';
import beatlesStory from '../../assets/beatles-story.jpg';
import cavernClub from '../../assets/cavern-club.jpg';
import anfield from '../../assets/anfield.jpg';
import catedral from '../../assets/catedral.jpg';
import seftonPark from '../../assets/sefton-park.jpg';

function Lugares() {
  return (
    <div className={styles.lugares}>
      <h1>Lugares para conhecer</h1>
      <p className={styles.subtitulo}>Alguns dos lugares mais famosos de Liverpool</p>

      <div className={styles.cards}>
        <CardLugar
          imagem={albertDock}
          nome="Royal Albert Dock"
          categoria="Ponto turístico"
          bairro="Centro / beira do rio"
          descricao="Antigo complexo de docas de 1846 que hoje tem museus, lojas e restaurantes. É um dos lugares mais visitados da cidade."
          dicas={["Passear pelas docas é de graça", "O Merseyside Maritime Museum fica lá e é gratuito", "Bom lugar pra ver o pôr do sol"]}
        />

        <CardLugar
          imagem={beatlesStory}
          nome="The Beatles Story"
          categoria="Música"
          bairro="Royal Albert Dock"
          descricao="Museu que conta a história dos Beatles, desde o começo da banda em Liverpool até o fim."
          dicas={["A entrada é paga", "Separe umas 2 horas pra visita", "Dá pra comprar o ingresso pelo site antes"]}
        />

        <CardLugar
          imagem={cavernClub}
          nome="Cavern Club"
          categoria="Música"
          bairro="Mathew Street"
          descricao="Clube onde os Beatles tocaram quase 300 vezes no começo da carreira. Ainda tem música ao vivo todos os dias."
          dicas={["À noite costuma ficar bem cheio", "A rua Mathew Street tem vários bares e lojas de lembrança", "Leve documento com foto"]}
        />

        <CardLugar
          imagem={anfield}
          nome="Anfield"
          categoria="Futebol"
          bairro="Anfield"
          descricao="Estádio do Liverpool Football Club. Mesmo quem não gosta muito de futebol costuma gostar da visita."
          dicas={["Ingresso pra jogo esgota rápido", "Tem tour pelo estádio em dias sem jogo", "Dá pra ir de ônibus saindo do centro"]}
        />

        <CardLugar
          imagem={catedral}
          nome="Liverpool Cathedral"
          categoria="Arquitetura"
          bairro="Perto da Hope Street"
          descricao="A maior catedral do Reino Unido. Por dentro ela é enorme e muito bonita."
          dicas={["A entrada é gratuita", "Subir na torre é pago, mas a vista da cidade vale a pena", "Fica perto do centro, dá pra ir a pé"]}
        />

        <CardLugar
          imagem={seftonPark}
          nome="Sefton Park"
          categoria="Parque"
          bairro="Sul da cidade"
          descricao="Um dos maiores parques de Liverpool, com lago e uma estufa antiga chamada Palm House."
          dicas={["Ótimo pra fazer piquenique no verão", "A entrada é gratuita", "Vá em dia de sol, se tiver um"]}
        />
      </div>
    </div>
  );
}

export default Lugares;
