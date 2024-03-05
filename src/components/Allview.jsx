import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllVideosAPI } from '../services/allAPI'


function Allview({uploadVideoResponse}) {

  const[ allVideos,setAllVideos]=useState([])
  const [deleteVideoResponse,setDeleteVideoResponse]=useState("")

  const getAllVideos = async ()=>{
  const result=await getAllVideosAPI()
  //  console.log(result);
   if(result?.status==200){
    setAllVideos(result?.data);
   }
  }
  useEffect(()=>{
  getAllVideos()

  },[uploadVideoResponse,deleteVideoResponse])
  console.log(allVideos);
  return (
   
    <>
    <Row>
       { allVideos?.length>0? allVideos?.map((video,index)=>(
         <Col key={index} className='mb-4' sm={12} md={6} lg={3}>
         <Videocard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse} />
     </Col>
       )) 
        :
        <div>No videos are updated yet!!!</div>
        }
    </Row>
    </>
  )
}

export default Allview