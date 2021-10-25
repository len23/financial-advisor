import Container from 'react-bootstrap/Container'
import Header from '../componentes/Header';
import RiskSelection from './RiskSelection';

function App() {
  return (
    <div>
      <Header/>
      <Container className="mt-5">
        <RiskSelection />
      </Container>
    </div>
  );
}

export default App;
