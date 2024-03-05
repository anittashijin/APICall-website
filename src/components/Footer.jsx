import React from 'react'

function Footer() {
  return (
    <div className='bg-info'>
        <div  style={{height:'300px'}} className='container ms-3 mt-5 w-100 footer'>
         <div className="footer-content d-flex justify-content-between">
         <div className="links d-flex flex-column mt-5">
              <h3 className='text-white'><b>Contact Us</b></h3>
              <h6 className='text-white'><b>Email:</b></h6>
              <a  style={{textDecoration:'none',color:'white' }}>feedhopeo@organic.com</a>
              <h6 className='text-white'><b>Phone No:</b></h6>
              <a style={{textDecoration:'none',color:'white' }}>9895514844</a>
              <h6 className='text-white'><b>Address:</b></h6>
              <a style={{textDecoration:'none',color:'white' }}>98 Road,Borgail Street,USA</a>
            
          </div>
          <div style={{width:'400px'}} className="media mt-5">
              <h3 className='d-flex text-white'> <img className='me-3 ' style={{height:'60px',width:'80px'}} src="https://th.bing.com/th/id/OIP.AGW-sebMhObi3N_9B7U6wgHaHa?rs=1&pid=ImgDetMain" alt="" />{' '}
<b>Beauty By Myself</b></h3>
              <p style={{textAlign:'justify',color:'white' }}>You can be the most beautiful person in the world and everybody sees light and rainbows when they look at you</p>
              <div className='icons d-flex justify-content-between mt-3'>
                <a style={{textDecoration:'none',color:'white' }}><i class='fa-brands fa-twitter fa-1x'></i></a>
                <a  style={{textDecoration:'none',color:'white' }}><i class='fa-brands fa-instagram fa-1x'></i></a>
                <a  style={{textDecoration:'none',color:'white' }}><i class='fa-brands fa-facebook fa-1x'></i></a>
                <a  style={{textDecoration:'none',color:'white' }}><i class='fa-brands fa-linkedin fa-1x'></i></a>
                <a style={{textDecoration:'none',color:'white' }}><i class='fa-brands fa-github fa-1x'></i></a>
                <a style={{textDecoration:'none',color:'white' }}><i class='fa-brands fa-phone fa-1x'></i></a>
  
              </div>
          </div>
          <div className="guides d-flex flex-column mt-5">
              <h3 className='text-white'><b>Utility Pages</b></h3>
              <a  style={{textDecoration:'none',color:'white' }}>Style Guide</a>
              <a style={{textDecoration:'none',color:'white' }}>404 not found</a>
              <a  style={{textDecoration:'none',color:'white' }}>password protector</a>
              <a  target='_blank' style={{textDecoration:'none',color:'white' }}>Licence</a>
              <a style={{textDecoration:'none',color:'white' }}>Chargering</a>
  
          </div>
         </div>
         </div>
    </div>
  )
}

export default Footer