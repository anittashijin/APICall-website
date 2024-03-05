import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <>
        <div className='out'>
            <div className='row'>
                <div className="col-lg-12 f-c " style={{height:'100vh'}}>
                    <p className=' h-1 h_11 text-white'>Switch on the</p>
                    <p className=' h-1 h_1 text-white'>Sparkle</p>
                    <p className=' h-1 h_1 text-white'>In you!</p>
<Link to={'/home'}>
                        <button className='btn btn-info ms-5'>View More</button>
    
</Link>    
                </div>
            </div>
            <div className='container'>
            <div className='row rw1 mt-5 mb-3'>
                <div className="col-lg-6 c2" style={{height:'50vh'}}>
                    <p className='text-info p1 mt-3'>our Naturals in 2024</p>
                    <p className='text-info p11 mt-5'>Our Natural Journey</p>
                </div>
                <div className="col-lg-6">
                    <div className="row ms-2 r1 mt-5">
                        <div className="col-lg-4 c4">
                            <p className='text-info p11' >700+</p>
                            <p className=' p1'>Salons</p>
                        </div>
                        <div className="col-lg-4 c4">
                        <p className='text-info p11' >20+</p>
                        <p className='p1 '>States</p>
                        </div>
                        <div className="col-lg-4 c4">
                        <p className='text-info p11' >10,000</p>
                            <p className='p1 '>Professionals</p>
                        </div>
                    </div>
                    <div className="row mt-5 ">
                        <p className='h-2'>23 Years Of Pathbreaking Excellence In Beauty Services & Entrepreneurship Opportunities!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <p className='text-center p1 '>Naturally, you!!!</p>
                <p className='text-center p11 text-info'>What our Magicians can do for you!</p>
                <div className="col-lg-6">
                    <img className='img1' src="https://images.pexels.com/photos/12730873/pexels-photo-12730873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>

                <div className="col-lg-6 cl ">
                    <p className='ms-5 p2 mt-5'>EXCLUSIVELY BRIDAL</p>
                    <p className='ms-5 p21 mt-3'>Bespoke bridal looks for brides that cover all sevices.</p>
                </div>  
            </div>
            <div className="row mt-3">
                <div className="col-lg-6 cl1">
                    <p className='text-white ms-5 mt-5 p2'>Skincare</p>
                    <p className='text-white ms-5 p21 mt-3'>Natural skincare services replenish,rejuvanate and revitalise your skin</p>
                </div>
                <div className="col-lg-6 cl1">
                <img src="https://naturals.in/wp-content/uploads/2022/08/Jenelia-1-1.png" alt="" />

                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-6 ">
                    <img className='img1' src="https://images.pexels.com/photos/3331488/pexels-photo-3331488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="col-lg-6 cl2">
                    <p className='text-black ms-5 mt-5 p2'>Hair care</p>
                    <p className=' ms-5 p21 mt-3'>Hairstyling and cuts from simple trims to a coucher looks</p>
                </div>
            </div>
            </div> 
        </div>
    </>
  )
}

export default Landing