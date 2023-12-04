import React from 'react'
import './Services.css'
import { Row, Col, Accordion } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Header from '../components/Header';



function Services() {
  return (
    <div className='services'  style={{ padding: '1rem 0' }}>
      <Header></Header>
      <h1 className='text-center bg-black p-5' style={{fontSize:'60px', color:'white', fontWeight:'700'}}>OUR SET OF SERVICES</h1>
      <Row className='p-5'>
        <Col className='md-4 lg-4 '>
          <Link className='text-decoration-none' to={'/display'}>
          <Card data-aos="zoom-in" data-aos-duration="1000" className='' style={{ width: '23rem', height:'41rem' }}>
            <Card.Img className='cardimg' variant="top" style={{width:'23rem',height:'30rem'}} src="https://i.postimg.cc/C18PPbzW/archdesign.webp" />
            <Card.Body>
              <Card.Title className='text-dark fw-bolder fs-4'>ARCHITECTURAL DESIGN</Card.Title>
              <Card.Text>
                We make your favourite place in the world more beautiful.Get ready to build a lifelong fav hanging spot
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Link>
        </Col>



        <Col className='md-4 lg-4' style={{paddingTop:'70px'}}>
        <Link className='text-decoration-none' to={'/display'}>
          <Card data-aos="zoom-in" data-aos-duration="1500" className='' style={{ width: '23rem', height:'41rem' }}>
            <Card.Img className='cardimg'  variant="top" style={{width:'23rem',height:'30rem'}} src="https://i.postimg.cc/X7SVN0db/pexels-isaw-company-945688.jpg" />
            <Card.Body>
              <Card.Title className='text-dark fw-bolder fs-4'>INTERIOR DESIGN</Card.Title>
              <Card.Text>
              We make your favourite place in the world more beautiful.Get ready to build a lifelong fav hanging spot
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Link>
        </Col>



        <Col className='md-4 lg-4' style={{paddingTop:'140px'}}>
          <Link className='text-decoration-none' to={'/display'}>
          <Card data-aos="zoom-in" data-aos-duration="2000" className='crd' style={{ width: '23rem', height:'41rem' }}>
            <Card.Img className='cardimg' variant="top" style={{width:'23rem',height:'30rem'}} src="https://i.postimg.cc/Vv44hwcC/pexels-cup-of-couple-6963787.jpg" />
            <Card.Body>
              <Card.Title className='text-dark fw-bolder fs-4'>SPACE PLANNING</Card.Title>
              <Card.Text>
              We make your favourite place in the world more beautiful.Get ready to build a lifelong fav hanging spot
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Link>
        </Col>
      </Row>


{/* secon row */}

<Row className='p-5'>
        <Col className='md-4 lg-4 '>
          <Link className='text-decoration-none' to={'/display'}>
          <Card data-aos="zoom-in" data-aos-duration="1000" className='' style={{ width: '23rem', height:'41rem' }}>
            <Card.Img className='cardimg' variant="top" style={{width:'23rem',height:'30rem'}} src="https://i.postimg.cc/xT5FpgVZ/pexels-nadine-wuchenauer-1528975.jpg" />
            <Card.Body>
              <Card.Title className='text-dark fw-bolder fs-4'>DECORATIONS</Card.Title>
              <Card.Text>
                We make your favourite place in the world more beautiful.Get ready to build a lifelong fav hanging spot
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Link>
        </Col>



        <Col className='md-4 lg-4' style={{paddingTop:'70px'}}>
        <Link className='text-decoration-none' to={'/display'}>
          <Card data-aos="zoom-in" data-aos-duration="1500" className='' style={{ width: '23rem', height:'41rem' }}>
            <Card.Img className='cardimg'  variant="top" style={{width:'23rem',height:'30rem'}} src="https://i.postimg.cc/257w3SjK/pexels-ja-norlin-photography-2491640.jpg" />
            <Card.Body>
              <Card.Title className='text-dark fw-bolder fs-4'>EXTERIOR DESIGN</Card.Title>
              <Card.Text>
              We make your favourite place in the world more beautiful.Get ready to build a lifelong fav hanging spot
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Link>
        </Col>



        <Col className='md-4 lg-4' style={{paddingTop:'140px'}}>
          <Link className='text-decoration-none' to={'/display'}>
          <Card data-aos="zoom-in" data-aos-duration="2000" className='crd' style={{ width: '23rem', height:'41rem' }}>
            <Card.Img className='cardimg' variant="top" style={{width:'23rem',height:'30rem'}} src="https://i.postimg.cc/cHjFw12M/pexels-charles-2792602.jpg" />
            <Card.Body>
              <Card.Title className='text-dark fw-bolder fs-4'>CONSTRUCTION</Card.Title>
              <Card.Text>
              We make your favourite place in the world more beautiful.Get ready to build a lifelong fav hanging spot
              </Card.Text>
              
            </Card.Body>
          </Card>
          </Link>
        </Col>
      </Row>


    {/* questions */}

    
    <section class="faq-section py-5 bg-black text-light mt-5">
                <div class="container">
                    <h1 className="text-center mb-5">
                        FREQUENTLY ASKED QUESTIONS
                    </h1>
                    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>HOW MANY YEARS OF EXPERIENCE DOES YOUR FIRM HAVE?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='mt-3'>
        <Accordion.Header>HOW BIF IS YOUR TEAM OF ARCHITECT?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className='mt-3'>
        <Accordion.Header>HOE CAN I GET A QUOTE FOR MY PROJECT?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
         
          
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className='mt-3'>
        <Accordion.Header>DOES YOUR FIRM HAVE A PROJECT MINIMUM?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </div>
            </section>

    </div>
  )
}

export default Services