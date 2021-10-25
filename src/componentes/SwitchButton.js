export default function SwitchButtton(props) {
 return (  
  <img 
   className="bg-info border border-3 border-success" 
   style={{cursor:'pointer'}} 
   src={props.src} width="px" 
   onClick={props.handleDataDisplay}/>
 )

}