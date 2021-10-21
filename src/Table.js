import Table from 'react-bootstrap/Table'
import {dataRisk} from './data-risk';

export default function TableRisk(props) {

 const dataTable = dataRisk.map(data => {
  return (
   <tr>
    <td>{data.risk}</td>
    <td>{data.bonds}</td>
    <td>{data.largeCap}</td>
    <td>{data.MidCap}</td>
    <td>{data.Foreign}</td>
    <td>{data.SmallCap}</td>
   </tr>
   ) 
 })

 return (
  <Table striped bordered hover>
   <thead>
    <tr>
     <th>Risk</th>
     <th>Bounds %</th>
     <th>Large Cap %</th>
     <th>Mid Cap %</th>
     <th>Foreign %</th>
     <th>Small Cap %</th>
    </tr>
   </thead>
   <tbody>
    {dataTable}
   </tbody>
  </Table>)
}