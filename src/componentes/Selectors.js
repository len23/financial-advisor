import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';

export default function Selectors(props) {
 return (
  <div>
   <p className="text-center fs-3"><b>Please Select A Risk Level For Your Investment Portfolio</b></p>
   <Row className="w-75 mx-auto">
    <Col>LOW</Col>
    <Col className="text-end">HIGH</Col>
   </Row>
   <Stack style={{ position: 'relative' }} className="justify-content-between w-75 mx-auto" direction="horizontal">
    {props.dataRisk.map((d, index) => {
     return (<button
      className={(props.selectedIndex === index ? `bg-warning` : `bg-light`) + ` border p-4 mb-4`}
      key={index}
      onClick={() => props.handleSelection(index)}>
      {index + 1}</button>);
    })
    }
    <Link
     className="bg-light border p-4 mb-4"
     style={{ position: 'absolute', right: '-18%', textDecoration: 'none' }}
     to='/recomendations'
    >
     Continue
    </Link>
   </Stack>
  </div>
 )
}