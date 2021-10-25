import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function CurrentPortfolio(props) {
 return (
  <div>
   <h2>Please Enter Your Current Portfolio</h2>
   <Form>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
     <Form.Label column sm={2}>
      Email
    </Form.Label>
     <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
     </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3">
     <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
     </Col>
    </Form.Group>
   </Form>
  </div>
 );
}