import Table from 'react-bootstrap/Table'

export default function TableResults(props) {
 return (
  <Table striped bordered hover>
    <thead>
      <tr>
      <th></th>
      <th>Bounds </th>
      <th>Large Cap </th>
      <th>Mid Cap </th>
      <th>Foreign </th>
      <th>Small Cap </th>
      </tr>
    </thead>
    <tbody>
    <tr>
    <td ><b>Differences</b></td>
      {Object.keys(props.differences).map((key, index) => {
        return (
            <td key={index} >{props.differences[key]}</td>
        )
      })}
     </tr>
     <tr>
     <td><b>New Amounts</b></td>
     {Object.keys(props.newAmounts).map((key, index) => {
       return (
           <td key={index} >{props.newAmounts[key]}</td>
       )
     })}
    </tr>
    </tbody>
  </Table>)
}