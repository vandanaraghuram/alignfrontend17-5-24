import React, { useState } from 'react'
import './Home.css'
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


function Home() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  return (
    <div   >

      <section className='start' style={{ padding: '1rem 0' }} >
        <Header></Header>
        <div className='d-flex align-items-center justify-content-start' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className='fw-bolder ms-5 mt-5 ' style={{ fontSize: '100px', color: 'wheat' }}>YOU DREAM <br /> WE BUILD</h1>

        </div>
        <p style={{ color: 'wheat' }} className='ms-5' data-aos="fade-up"
          data-aos-duration="2000">Little by little day by day, what is meant for you will find its way </p>
        <Link to={'/Login'}>
          <div>
            <Button className='ms-5 mt-4 fs-5' variant='outline-warning'>FOR MORE</Button>
          </div>

        </Link>
      </section>

      <section className='about' >
        {/* <h1 className='ms-5' style={{ color: 'wheat' }}>ABOUT US</h1>
        <hr style={{ color: 'wheat' }} /> */}
        <Row>
          <Col className='md-6 lg-6 d-flex align-items-center justify-content-center mt-5 ms-5' >
            <p style={{ color: 'wheat' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam necessitatibus commodi cupiditate perspiciatis tempora repellendus magni deleniti corrupti  <br />dolores aut, nostrum, asperiores aliquid obcaecati sit alias, porro iusto minus.</p>
          </Col>
          <Col className='md-6 lg-6 '>
            <div className='d-flex align-items-center justify-content-start  mt-5'>
              <h1 className='fw-bolder' style={{ fontSize: '80px', color: 'wheat' }}>WE DESIGN <br /> UNIQUE PLACES</h1>

            </div>
          </Col>
        </Row>

        <Row className='mt-5 text-center' data-aos="zoom-in" data-aos-duration="2500">

          <Col className='md-4 lg-4 mt-5'>
            <div className='vl'>
              <p style={{ fontSize: '100px', color: 'orange', marginBottom: '0' }}>5+</p>

              <span style={{ color: 'beige' }}  >YEARS OF EXPERIENCE</span>

            </div>

          </Col>
          <Col className='md-4 lg-4 mt-5'>
            <div className='vl ms-4'>
              <p style={{ fontSize: '100px', color: 'orange', marginBottom: '0' }}>20+</p>

              <span style={{ color: 'beige' }}  >PROJECTS</span>

            </div>

          </Col>
          <Col className='md-4 lg-4 mt-5'>
            <div className='vl ms-4'>
              <p style={{ fontSize: '100px', color: 'orange', marginBottom: '0' }}>100+</p>

              <span style={{ color: 'beige' }}  >DESIGNS</span>

            </div>

          </Col>

        </Row>

      </section>



      <section className='clients '>

        <Row>
          <Col>
            <div className='d-flex align-items-center justify-content-start' data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h1 className='fw-bolder ms-5 mt-5 ' style={{ fontSize: '70px', color: 'wheat' }}>WHAT CLIENTS <br />SAYS  ABOUT US</h1>

            </div>

          </Col>
          <Col>
            <p data-aos="fade-up"
              data-aos-duration="3000" style={{ color: 'wheat', marginTop: '70px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam necessitatibus commodi cupiditate perspiciatis tempora repellendus magni deleniti corrupti  <br />dolores aut, nostrum, asperiores aliquid obcaecati sit alias, porro iusto minus.</p>

          </Col>
        </Row>

        <div className='d-flex  justify-content-evenly mt-5' >
          <Card data-aos="fade-left"
            data-aos-duration="1300" style={{ width: '6rem', backgroundColor: 'transparent', border: 'none' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/KcD1dnzS/Enj3o-Q8-WMAA5r-NT.jpg" style={{ borderRadius: '80px', height: '5.5rem' }} />
            <Card.Body>
              {/* <Card.Title style={{ fontSize: '12px', color: 'peru' }}>Surya Sivakumar</Card.Title> */}
            </Card.Body>
          </Card>

          <Card data-aos="fade-left"
            data-aos-duration="1500" style={{ width: '6rem', backgroundColor: 'transparent', border: 'none', marginLeft: '15px' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/vBJ2wJHh/images-8.jpg" style={{ borderRadius: '80px', height: '5.5rem' }} />
            <Card.Body>
              {/* <Card.Title style={{ fontSize: '12px', color: 'peru' }}>Hrithik Roshan</Card.Title> */}
            </Card.Body>
          </Card>

          <Card data-aos="fade-left"
            data-aos-duration="1700" style={{ width: '6rem', backgroundColor: 'transparent', border: 'none', marginLeft: '15px' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/XqhjW7Bh/highest-paid-actors.webp" style={{ borderRadius: '80px', height: '5.5rem' }} />
            <Card.Body>
              {/* <Card.Title style={{ fontSize: '12px', color: 'peru' }}>Tom Cruise</Card.Title> */}
            </Card.Body>
          </Card>

          <Card data-aos="fade-left"
            data-aos-duration="1900" style={{ width: '6rem', backgroundColor: 'transparent', border: 'none', marginLeft: '15px' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/RZXxcZXH/images-9.jpg" style={{ borderRadius: '80px', height: '5.5rem' }} />
            <Card.Body>
              {/* <Card.Title style={{ fontSize: '12px', color: 'peru' }}>Emma Stone</Card.Title> */}
            </Card.Body>
          </Card>

          <Card data-aos="fade-left"
            data-aos-duration="2300" style={{ width: '6rem', backgroundColor: 'transparent', border: 'none', marginLeft: '15px' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/XqfKMN8g/Whats-App-Image-2023-11-14-at-1-57-10-PM.jpg" style={{ borderRadius: '80px', height: '5.5rem' }} />
            <Card.Body>
              {/* <Card.Title style={{ fontSize: '12px', color: 'peru' }}>Shahrukh Khan</Card.Title> */}
            </Card.Body>
          </Card>

          <Card data-aos="fade-left"
            data-aos-duration="2500" style={{ width: '6rem', backgroundColor: 'transparent', border: 'none', marginLeft: '15px' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/nh7QzNkg/images-11.jpg" style={{ borderRadius: '80px', height: '5.5rem' }} />
            <Card.Body>
              {/* <Card.Title style={{ fontSize: '12px', color: 'peru' }}>Aalia Bhatt</Card.Title> */}
            </Card.Body>
          </Card>

          <Card data-aos="fade-left"
            data-aos-duration="2700" style={{ width: '6rem', backgroundColor: 'transparent', border: 'none', marginLeft: '15px' }}>
            <Card.Img variant="top" src="https://i.postimg.cc/xd2t5w1V/images-12.jpg" style={{ borderRadius: '80px', height: '5.5rem' }} />
            <Card.Body>
              {/* <Card.Title style={{ fontSize: '8px', color: 'peru' }}>Cillian Murphy</Card.Title> */}
            </Card.Body>
          </Card>
        </div>



        <div className='testimoni d-flex align-items-center justify-content-center mt-4 '>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className='glass mb-5'
          style={{ height: '190px', backgroundColor: 'transparent' }}
        >
          <Carousel.Item>
            <img
              className='d-block'
              src='https://i.postimg.cc/d338Gwn9/186461.webp'
              alt='First slide'
              style={{ height: '190px', width: '1000px', backgroundColor: 'transparent' }}
            />
            <Carousel.Caption>
              <h1 className='mb-4 review fs-3' style={{ color: 'peru' }}>"They did an amazing job remodeling our home"- <span className='fs-5'>Surya Sivakumar</span></h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block'
              src='https://i.postimg.cc/d338Gwn9/186461.webp'
              alt='Second slide'
              style={{ height: '190px', width: '1000px', backgroundColor: 'transparent' }}
            />
            <Carousel.Caption>
              <h1 className='mb-4 review' style={{ color: 'peru' }}>"Our home design is unique, beautiful and special"- <span className='fs-5'>Shahrukh Khan</span></h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block'
              src='https://i.postimg.cc/d338Gwn9/186461.webp'
              alt='Third slide'
              style={{ height: '190px', width: '1000px', backgroundColor: 'transparetn' }}
            />
            <Carousel.Caption>
              <h1 className='mb-4 review' style={{ color: 'peru' }}>"Love how our home looks more comfy and modern"- <span className='fs-5'>Emma Stone</span></h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

          {/* <Carousel className='glass mb-5' style={{ height: '190px', width: '1000px', backgroundColor: 'blue' }}>
           
            <Carousel.Item>
            
              <Carousel.Caption>
                <h1 style={{color:'blacwhite'}} >First slide label</h1>
                <p style={{color:'white'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
           
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}




      </section>




    </div>
  )
}

export default Home