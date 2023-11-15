import { useState, useEffect} from 'react'
import AllWizards from '../AllWizards'
import Loader from "../../components/Loader"
import "./style.css"


const HomePage = () => {

  const [dataPage, setDataPage] = useState([])
  const [loading, setLoading] = useState(true)
 const url = "https://harry-potter-api-en.onrender.com/characters"
 
  useEffect(() => {
    setLoading(true)

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setDataPage(data)
      console.log(data);
      setLoading(false)     
    })
  }, [])

   
  return (
 
    <main>
      <h3 className='title'>Vítejte ve světe čar a kouzel</h3>

      { loading ? <Loader/> : <AllWizards props={dataPage}/>}
    </main>
  
  )
}

export default HomePage;
