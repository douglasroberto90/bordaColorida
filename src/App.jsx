import './App.css';
import BordaColorida from './components/BordaColorida/BordaColorida.jsx';
import ContainerImagem from './components/ContainerImagem/ContainerImagem.jsx';

export default function App() {

  return (
    <div classname="App">
      <BordaColorida>
        <p>O que farei ao chegar em casa? (resumidamente)</p>
        <ol>
          <li>Chegar em casa</li>
          <li>Reclamar do dia</li>
          <li>Ir dormir</li>
        </ol>
      </BordaColorida>
      <ContainerImagem legenda="Opaloso">
        <img src='./assets/opala.jpg' alt=''></img>
      </ContainerImagem>
      <BordaColorida>
        <ContainerImagem legenda="Maveco">
          <img src='./assets/maverick.jpg' alt=''></img>
        </ContainerImagem>
      </BordaColorida>
    </div>
  )
}


