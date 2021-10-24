import { dataRisk } from './data-risk';
import Stack from 'react-bootstrap/Stack';
import Table from './Table';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DoughnutChart from './DoughnuChart';



export default function RiskSelection(props) {

 const [selectedIndex, setSelectedIndex] = useState(null);
 const [chartData, setChartData] = useState([]);
 const hadleSelection = (index) => {
  setSelectedIndex(index);
 }

 const handleSelectedData = (data) => {
   if(data) {
    let dataArr = Object.values(data);
    dataArr.shift();
    setChartData(dataArr ? dataArr : []); 
   }

 }

 return (
  <div>
  <p className="text-center fs-3"><b>Please Select A Risk Level For Your Investment Portfolio</b></p>
  <Row className="w-75 mx-auto">
   <Col>LOW</Col>
   <Col className="text-end">HIGH</Col>
  </Row>
   <Stack className="justify-content-between w-75 mx-auto" direction="horizontal">
    {dataRisk.map((d, index) => {
     return (<button
      className={ (selectedIndex === index ?  `bg-warning` : `bg-light` ) + ` border p-4 mb-4`}
      key={index}
      onClick={() => hadleSelection(index)}>
      {index + 1}</button>);
    })
    }
   </Stack>
   <Table 
    selectedIndex={selectedIndex}
    handleSelectedData={handleSelectedData}
    />
    <div style={{width:"30rem"}}>
    <DoughnutChart chartData={chartData} />
    </div>
  </div>
 );
} 