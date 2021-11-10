import RiskSelected from '../componentes/RiskSelected';
import CurrentPortfolio from '../componentes/CurrentPortfolio';
import TableResults from '../componentes/TableResults';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';


export default function Recomendations(props) {

  const [showCaculation, setShowCalculation] = useState(false);

  const [values, setValues] = useState(() => {
    const newObj = { ...props.data };
    for (let i in newObj) {
      newObj[i] = ''
    };
    delete newObj['risk']
    return newObj;
  });

  const [newValues, setNewValues] = useState(() => {
    const newObj = { ...props.data };
    for (let i in newObj) {
      newObj[i] = 0
    };
    delete newObj['risk']
    return newObj;
  });

  const [difference, setDifference] = useState(() => {
    const newObj = { ...props.data };
    for (let i in newObj) {
      newObj[i] = 0
    };
    delete newObj['risk']
    return newObj;
  })


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      makeCalculations();
    }
  }

  const handleChange = (name, { target }) => {
    setValues({ ...values, [name]: target.value });
  }

  const makeCalculations = () => {
    const total = Object.values(values).reduce((pv, cv) => parseInt(pv) + parseInt(cv));
    const newValuesTemp = { ...newValues };
    const newDifferenceTemp = { ...difference };

    for (let key in newValuesTemp) {
      newValuesTemp[key] = (total * props.data[key] / 100).toFixed(2);
    }

    for (let key in newDifferenceTemp) {
      newDifferenceTemp[key] = (newValuesTemp[key] - parseInt(values[key])).toFixed(2);
    }

    setNewValues(newValuesTemp);
    setDifference(newDifferenceTemp);
    setShowCalculation(true);

  }

  return (
    <div>
      <RiskSelected data={props.data} />
      <h2 className="fs-3">Please Enter Your Current Portfolio</h2>
      <Row>
        <Col lg={5}>
          <CurrentPortfolio onSubmit={handleSubmit} onChange={handleChange} labels={values} />
        </Col>
        <Col lg={7}>
          {<TableResults differences={difference} newAmounts={newValues} />}
          <FormControl as="textarea" aria-label="With textarea" disabled rows={5}/>
        </Col>
      </Row>
    </div>
  )
}