import React from 'react'
import Navbar from './Navbar'
import { cloth_data } from '@/utils/userInfo'
import { useParams } from 'react-router-dom'

const ImageOpen = () => {

  const {id} = useParams()


  const filter_data = cloth_data.filter ((item)=> item.id === parseInt(id))

  console.log(filter_data)
  return (
    <div>
      <Navbar/>

      <div style={{
        width: "100%",
        height: "95vh",
        // background: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>

           <div style={{
        width: "70%",
        height: "70vh",
        // background: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems:"center", 
       
      }}>
   {
    filter_data.map((props)=>(
          <>
  
           <img src={props?.image} alt="" style={{width: "100%", height: "90%", objectFit: "cover"}} />
            <h1 style={{fontSize: 30, fontWeight: "600"}}>{props?.title}</h1>
           <p style={{fontWeight: "400"}}>{props?.description}</p>
          </>
    ))
   }

      </div>

      </div>
    </div>
  )
}

export default ImageOpen
