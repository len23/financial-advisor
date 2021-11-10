import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const LABELS = {
 bonds: 'Bounds', 
 largeCap: 'Large Cap', 
 MidCap: 'Mid Cap', 
 Foreign: 'Foreign', 
 SmallCap: 'Small Cap'};

export default function CurrentPortfolio(props) {

 return (
  <div>
   <Form onSubmit={props.onSubmit} >
    {Object.keys(props.labels).map((label, index) => {
      const regex = / /g;
      return (
       <Form.Group as={Row} key={index} className="mb-3" controlId={`validation${label.toLowerCase().replace(regex,'')}`}>
        <Form.Label column sm={3}>
         {LABELS[label]}
     </Form.Label>
        <Col sm={7}>
         <Form.Control
          type="number"
          required
          value={props.labels[label]}
          onChange={(event) => props.onChange(label, event)}
         />
        </Col>
       </Form.Group>
      )
    })}



    <Form.Group as={Row} className="mb-3">
     <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" disabled={false}>Calculate</Button>
     </Col>
    </Form.Group>
   </Form>
  </div>
 );
}