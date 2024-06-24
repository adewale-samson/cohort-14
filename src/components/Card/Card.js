import React, {useContext} from 'react'
import { contextCreator } from '../../Pages/Wale/Wale'
import './Card.css'


const Card = ({element}) => {
  const {data, setData} = useContext(contextCreator)
  console.log(data);
  return (
    <div className='card-parent'>
        <p>Downloads: {element.download}</p>
        <p>Comments: {element.comments}</p>
        <p>Likes: {element.likes}</p>
        <p>tags: {element.tags}</p>
        <img src={element.userImageURL} alt='img'/>
    </div>
  )
}

export default Card