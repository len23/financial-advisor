import Table from 'react-bootstrap/Table'

export default function RiskSelected(props) {
 return (
  <div>
  <h1>Ris Level {props.data.risk}</h1>
  <Table striped bordered hover>
   <thead>
    <tr>
     <th>Bounds %</th>
     <th>Large Cap %</th>
     <th>Mid Cap %</th>
     <th>Foreign %</th>
     <th>Small Cap %</th>
    </tr>
   </thead>
   <tbody>
    {
     <tr>
      <td>{props.data.bonds}%</td>
      <td>{props.data.largeCap}%</td>
      <td>{props.data.MidCap}%</td>
      <td>{props.data.Foreign}%</td>
      <td>{props.data.SmallCap}%</td>
     </tr>
    }
   </tbody>
  </Table>
  </div>
 );
}