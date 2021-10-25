import RiskSelected from '../componentes/RiskSelected'
import CurrentPortfolio from '../componentes/CurrentPortfolio'

export default function Recomendations(props) {
 return( 
  <div>
   <RiskSelected data={props.data}/>
   <CurrentPortfolio />
  </div>
  )
}