import Container from 'react-bootstrap/Container'
import Header from '../componentes/Header';
import RiskSelection from '../containers/RiskSelection';
import Recomendations from '../containers/Recomendations';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [selectedData, setSelectedData] = useState({});

  const handleSelection = (data) => {
    setSelectedData(data);
  }

  return (
    <Router>
      <Header/>
      <Container className="mt-5">
      <Route exact path='/'>
        <RiskSelection getRowSelectd={handleSelection}/>
      </Route>
      <Route exact path='/recomendations'>
        <Recomendations data={selectedData}/>
      </Route>
      </Container>
    </Router>
  );
}

export default App;
