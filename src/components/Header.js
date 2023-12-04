import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Header() {
 const navigate=useNavigate()

const isloggedinData=localStorage.getItem("isloggedin")
console.log(isloggedinData);


const adminLogout=()=>{
navigate('/')
localStorage.clear()
}



  return (
    <div>
        <Navbar expand='lg'  id='navbar'>
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-expand me-auto">
          <Link className='text-decoration-none' to={'/'}>
            <Nav.Item className='navlink fs-4 ms-4'   >HOME</Nav.Item>
            </Link>
            <Link className='text-decoration-none' to={'/services'}>
            <Nav.Item className='navlink fs-4 ms-4 text-decoration-none' >WORKS</Nav.Item>
            </Link>
            
            <Link className='text-decoration-none' to={'/blog'}>
            <Nav.Item className='navlink fs-4 ms-4 text-decoration-none' >BLOG</Nav.Item>
            </Link>

            {
              !isloggedinData?<Link className='text-decoration-none' to={'/contact'}>
              <Nav.Item className='navlink fs-4 ms-4'>ENQUIRY</Nav.Item>
              </Link>:<Nav.Item className='navlink fs-4 ms-4'></Nav.Item>
            }
            
{
  isloggedinData?<Link className='text-decoration-none' to={'/list'}>
  <Nav.Item className='navlink fs-4 ms-4'>ENQUIRED LIST</Nav.Item>
  </Link>:<Nav.Item className='navlink fs-4 ms-4'></Nav.Item>
}


{
  isloggedinData?<Link className='text-decoration-none' to={'/works'}>
  <Nav.Item className='navlink fs-4 ms-4'>ADD</Nav.Item>
  </Link>:<Nav.Item className='navlink fs-4 ms-4'></Nav.Item>
}
            
          </Nav>
          </Navbar.Collapse>
          <img style={{height:'90px', width:'100px'}} src="https://i.postimg.cc/TY3TS7Qz/Whats-App-Image-2023-11-13-at-8-28-38-PM-removebg-preview.png" alt="" />
          <Navbar.Brand className='fs-1 me-5 brand' style={{fontWeight:'bolder'}} data-aos="flip-left" >   ALIGN </Navbar.Brand>
          
        <div>
       {
         !isloggedinData ?<Link className='text-decoration-none' to={'/login'}>  <Button className=' mt-2 fs-5 btn-sm mx-2' variant='warning'>LOGIN</Button>
         </Link>:
        <Button onClick={adminLogout} className=' mt-2 fs-5 btn-sm' variant='warning'>LOGOUT</Button>
       }  
          
        </div>

       
        </Container>
      </Navbar>
    </div>
  )
}

export default Header