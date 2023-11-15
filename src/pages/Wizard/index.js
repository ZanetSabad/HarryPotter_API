import { useState, useEffect } from 'react'
import { NavLink, useParams } from "react-router-dom" 
import Loader from '../../components/Loader'
import "./style.css"

const Wizard = () => {
  
  const { id } = useParams()

  const[loading, setLoading] = useState(true)
  const[wizardInfo, setWizardInfo] = useState({})

  const url = `https://harry-potter-api-en.onrender.com/characters/${id}`

  useEffect(() => {
    setLoading(true)
    fetch(url)
    .then((response) => response.json()) 
    .then((data) => {
      setWizardInfo(data)
      setLoading(false)
    })
  }, []) 

  return (
    <main>
      {loading ?
        <div>
          <Loader />
        </div>
        :
        <>
          <div key={wizardInfo.id} className='one-wizard'>
          <h4 className='character'>{wizardInfo.character}</h4>
            <img src={wizardInfo.image} alr={wizardInfo.name} /> 
            
          </div>
          <div className='info-wizard'>
            <p>{wizardInfo.nickname}</p>
            <p>Hogwarts House: {wizardInfo.hogwartsHouse}</p>
            <p>Actor: {wizardInfo.interpretedBy}</p>
          </div>
          <NavLink className="link" to="/">Zpět na úvodní stránku</NavLink>
        </>
      }
      
    </main>
  )
}

export default Wizard
