import styles from './Dicas.module.css';

function Dicas() {
  return (
    <div className={styles.dicas}>
      <h1>Dicas para intercambistas</h1>

      <div className={styles.bloco}>
        <h2>Transporte</h2>
        <ul>
          <li>O centro da cidade é pequeno e dá pra fazer quase tudo a pé.</li>
          <li>Para lugares mais longe, use os ônibus ou o trem (Merseyrail).</li>
          <li>Na maioria dos ônibus dá pra pagar com cartão por aproximação.</li>
        </ul>
      </div>

      <div className={styles.bloco}>
        <h2>Clima</h2>
        <ul>
          <li>Chove bastante, então sempre leve um guarda-chuva ou casaco impermeável.</li>
          <li>Mesmo no verão a temperatura costuma ficar entre 15 e 20 graus.</li>
          <li>O tempo muda rápido, vale olhar a previsão antes de sair.</li>
        </ul>
      </div>

      <div className={styles.bloco}>
        <h2>Dinheiro</h2>
        <ul>
          <li>A moeda é a libra esterlina (£).</li>
          <li>Quase todo lugar aceita cartão, então não precisa andar com muito dinheiro.</li>
          <li>Supermercados como Tesco e Sainsbury's são mais baratos que comer fora.</li>
        </ul>
      </div>

      <div className={styles.bloco}>
        <h2>Outras dicas</h2>
        <ul>
          <li>A tomada é diferente da do Brasil (tipo G, com 3 pinos), leve um adaptador.</li>
          <li>O sotaque de Liverpool se chama "Scouse" e pode ser difícil no começo.</li>
          <li>O número de emergência é 999.</li>
        </ul>
      </div>
    </div>
  );
}

export default Dicas;
