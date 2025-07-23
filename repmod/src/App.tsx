import './App.css'
import { somar, dividir } from './utils/math';
import { gerarSaudacao, despedida } from './utils/saudacoes';
import { obterHoraAtual, obterDiaSemana } from './utils/tempo';
import { formatarMoeda, formatarData } from './utils/formatador';
import { ehPar, ehMaiorDeIdade } from './utils/verificacoes';

function App() {
  const nome = "Tina";

  const preco = 2876.5;
  const hoje = new Date();

  const idade = 30;
  const numero = 4;
  
  return (
    <>
      <div>
        <h2>{gerarSaudacao(nome)}</h2>
      </div>
      <div>
        <h3>Hoje é: {obterDiaSemana()}</h3>
        <p>Hora atual: {obterHoraAtual()}</p>
      </div>
      <div>
        <p>Preço: {formatarMoeda(preco)}</p>
        <p>Hoje é: {formatarData(hoje)}</p>
      </div>
      <div>
        <p>{numero} é par? {ehPar(numero) ? 'Sim' : 'Não'}</p>
        <p>{idade} anos → Maior de idade? {ehMaiorDeIdade(idade) ? 'Sim' : 'Não'}</p>
      </div>
      <div>
        <p>Soma: {somar(4, 2)}</p>
        <p>Divisão: {dividir(10, 2)}</p>
      </div>
      <div>
        <h3>{despedida(nome)}</h3>
      </div>
    </>
  )
}

export default App
