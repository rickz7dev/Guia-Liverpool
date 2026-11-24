import styles from './CardLugar.module.css';

// recebe os dados do componente pai (pagina Lugares) por props
function CardLugar({ imagem, nome, categoria, bairro, descricao, dicas }) {
  return (
    <div className={styles.card}>
      <img className={styles.imagem} src={imagem} alt={nome} />
      <div className={styles.conteudo}>
        <h3>{nome}</h3>
        <span className={styles.categoria}>{categoria}</span>
        <p className={styles.bairro}>Local: {bairro}</p>
        <p>{descricao}</p>
        <h4>Dicas:</h4>
        <ul>
          {dicas.map((dica, index) => (
            <li key={index}>{dica}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardLugar;
