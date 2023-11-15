import { NavLink } from "react-router-dom"
import "./style.css"

const AllWizards = ({props}) => {

  return (
    <div className='all-wizard'>
      {props.map((oneWizard) => (
        <div key={oneWizard.id}>
        
          <h3>{oneWizard.character}</h3>
          <NavLink key={oneWizard.id} to={`/wizard/${oneWizard.id}`}
          alt="">
          <img className="image" src={oneWizard.image} alt={oneWizard.character}/> 
          Více informací</NavLink>
        </div>
      ))}
    </div>
  )
}

export default AllWizards
