import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import './Selectors.css';

export default function Selectors(props) {
 return (
  <div>
   <p className="text-center fs-3"><b>Please Select A Risk Level For Your Investment Portfolio</b></p>
   <Row className="w-75 mx-auto">
    <Col>LOW</Col>
    <Col className="text-end">HIGH</Col>
   </Row>
   <Stack className="stack-position justify-content-between w-75 mx-auto" direction="horizontal">
    {props.dataRisk.map((d, index) => {
     return (<button
      className={(props.selectedIndex === index ? `bg-warning` : `bg-light`) + ` border p-4 mb-4`}
      key={index}
      onClick={() => props.handleSelection(index)}>
      {index + 1}</button>);
    })
    }
    <button
     className="continue-button bg-light border p-4 mb-4"
     onClick={props.continue}
     disabled={props.selectedIndex === null}
    >
     Continue
    </button>
   </Stack>
  </div>
 )
}