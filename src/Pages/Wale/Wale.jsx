import React, {useState, useEffect, useRef, createContext} from 'react'
import './Wale.css'
import Card from '../../components/Card/Card'
import axios from 'axios'
import Hero from '../../components/Hero/Hero'

export const contextCreator = createContext()
const Wale = () => {
    const [data, setData] = useState([])



    // const waleRef = useRef(null);
    // waleRef.current.style.color = 'red'
    // console.log(waleRef.c);



    const url='https://pixabay.com/api/videos/?key=30797709-202702e8b118291843d7c664a&q=yellow+flowers'
    
    useEffect(() => {
    //  const getData = async() => {
    //     const fetchData = await fetch(url)
    //     const response = await fetchData.json()
    //     setData(response.hits)
    //     console.log(response.hits);
    //  }
    //  getData()   
    axios.get(url)
    .then(response => {
        console.log(response);
        setData(response.data.hits)
    })
    }, [])
    console.log(data);
    return (
    <contextCreator.Provider value={{data, setData}}>
      <div className='wale-parent'>
          {
              data.map((element, i) => {
                return <Card key={i} element={element}/>  
              })
          }
          {/* <p ref={waleRef}>hello</p> */}
          <Hero />
          
      </div>
    </contextCreator.Provider>
  )
}

export default Wale