import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    
  <Navbar className="bg-info">
    <Container>
     <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home" className='fw-bolder d-flex align-items-center text-white ' style={{color:'white'}}>
            <img className='me-3' style={{height:'60px',width:'80px'}} src="https://th.bing.com/th/id/OIP.AGW-sebMhObi3N_9B7U6wgHaHa?rs=1&pid=ImgDetMain" alt="" />{' '}
            Beauty By Myself
          </Navbar.Brand>
     </Link>
    </Container>
  </Navbar>
  )
}

export default Header
//  <nav className="navbar  border ">
{/* <div className="container-fluid">
<a className="navbar-brand" href="#">
  <img className='ms-5' style={{height:'65px',width:'100px'}} src="https://cdn.dribbble.com/users/160296/screenshots/1184454/ol-bw-1.png" alt="" /><i className="fa-solid fa-heart" style={{color:'white'}}></i>
</a>
</div>
</nav> */}