import Table from 'react-bootstrap/Table'

export default function TableRisk(props) {

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
        {props.dataRisk.map((data, index) => {
          return (
            <tr key={index} className={props.selectedIndex === index ? `bg-warning` : ``}>
              <td>{data.risk}</td>
              <td>{data.bonds}</td>
              <td>{data.largeCap}</td>
              <td>{data.MidCap}</td>
              <td>{data.Foreign}</td>
              <td>{data.SmallCap}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>)
}