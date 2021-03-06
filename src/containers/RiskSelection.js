import { dataRisk } from '../assets/data-risk';
import { useState, useEffect } from 'react';
import list from '../assets/list.svg';
import pie from '../assets/pie-chart.svg'
import DoughnutChart from '../componentes/DoughnuChart';
import Table from '../componentes/Table';
import Selectors from '../componentes/Selectors';
import SwitchButtton from '../componentes/SwitchButton';
import { useHistory } from 'react-router-dom';

export default function RiskSelection(props) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [showGraphic, setShowGraphic] = useState({ show: false, srcImg: pie });
  const history = useHistory();

  useEffect(() => {
    let findSelected = dataRisk.find((d, i) => i === selectedIndex);
    handleSelectedData(findSelected);
  }, [selectedIndex])


  const handleSelection = (index) => {
    setSelectedIndex(index);
  }

  const handleSelectedData = (data) => {
    if (data) {
      let dataArr = Object.values(data);
      dataArr.shift();
      setChartData(dataArr ? dataArr : []);
      props.getRowSelectd(data);
    }
  }

  const handleDataDisplay = () => {
    setShowGraphic({ show: !showGraphic.show, srcImg: showGraphic.show ? pie : list });
  }

  const handleContinue = () => {
    let path = `recomendations`;
    history.push(path);
  }

  return (
    <div>
      <SwitchButtton handleDataDisplay={handleDataDisplay} src={showGraphic.srcImg} />
      <Selectors
        dataRisk={dataRisk}
        handleDataDisplay={handleDataDisplay}
        handleSelection={handleSelection}
        selectedIndex={selectedIndex}
        continue={handleContinue}
      />
      {!showGraphic.show &&
        <Table
          dataRisk={dataRisk}
          selectedIndex={selectedIndex}
        />
      }
      {showGraphic.show &&
        <DoughnutChart chartData={chartData} />
      }
    </div>
  );
} 