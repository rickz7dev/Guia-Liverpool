import styles from './Sobre.module.css';

function Sobre() {
  return (
    <div className={styles.sobre}>
      <h1>Sobre o projeto</h1>
      <p>
        Esse site foi feito como trabalho da disciplina de Laboratório de Desenvolvimento Web.
        Escolhi o tema de Liverpool porque vou fazer intercâmbio lá e achei que seria útil
        juntar as informações que fui pesquisando em um lugar só.
      </p>
      <p>
        A ideia é ajudar outros estudantes que também vão para Liverpool a conhecer a cidade
        antes de chegar.
      </p>

      <h2>Tecnologias usadas</h2>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>CSS Modules</li>
      </ul>
    </div>
  );
}

export default Sobre;
