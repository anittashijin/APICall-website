import React, { useState } from 'react'
import Add from './Add'
import Allview from './Allview'
import { Link } from 'react-router-dom'




function Home() {
  const[uploadVideoResponse,setUploadVideoResponse]=useState("")
  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'>
      <Add setUploadVideoResponse={setUploadVideoResponse}/>
      <Link to={'/watch'}>View History</Link>
      </div>
      <div className="row container-fluid mt-5 mb-5">
        <div className="col-lg-12">
          <h2 className='text-info mb-5'>Our Highlights Services</h2>
          <Allview uploadVideoResponse={uploadVideoResponse}/>
        </div>
      </div>
    </>
  )
}

export default Home