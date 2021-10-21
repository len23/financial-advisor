import Table from './Table';
import Container from 'react-bootstrap/Container'
import './App.css';
import Header from './Header';
import dataRisk from './data-risk';

function App() {
  return (
    <div>
      <Header/>
      <Container className="mt-5">
        <Table />
      </Container>
    </div>
  );
}

export default App;
