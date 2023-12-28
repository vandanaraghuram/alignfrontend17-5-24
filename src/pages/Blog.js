import React from 'react'
import './Blog.css';
import { Col, Row } from 'react-bootstrap';
import Header from '../components/Header';


function Blog() {
    return (
        <div className='main bg-black' style={{ padding: '1rem 0' }}>
            <Header></Header>
            <div>
                <h1 className='head bg-black text-center p-3 fw-bolder'>OUR BLOG</h1>
            </div>
            <Row>
                <Col className='md-6 lg-6'  >
                    <img src="https://i.postimg.cc/sDYn8rbK/pexels-magda-ehlers-9890979.jpg" alt="" style={{ marginLeft:'30px', marginTop:'60px'}} />
                </Col>
                <Col className='md-5 lg-5 '>
                    <div className=' mt-5'>
                        <h1 className='fw-bolder' style={{ fontSize: '45px', color: 'wheat' }}>TALA CAVE HOMES</h1>
                        <div>
                        <h6 className='text-secondary'>JUNE 2023</h6>
                        </div>
                        <p className='pe-3 mt-5' style={{color:'wheat',lineHeight:'35px', fontSize:'18px'}}> 
                        Forest Hills is a quiet picturesque retreat tucked away amidst dense foliage and trees.  The property perches high on top of a mountain overlooking miles and miles of forest and an estuary in the distance.

On the North West part of Forest Hills an escarpment facing both the sea and the estuary, is the most beautiful site at Tala. 21 centuries ago, Buddhist monks chose to build their homes right at this spot.  They excavated the basalt rock at the foot of the mountain perfectly hidden.  Yet the location unmistakably meditates to the  scenic view.
                        </p>
                        <p className='pe-3 mt-1' style={{color:'wheat',lineHeight:'35px', fontSize:'18px'}}> 
                        The 5 meter high vaulted rooms are built out of earth stabilised blocks sourced from the site itself. This structure is able to withstand the massive loads of the earth above, with minimal means. It reduces the amount of reinforced concrete by 75%. Because the embodied energy of the structures is reduced, the construction is more environmentally friendly. Additionally, the underground design keep the spaces naturally comfortable by using geothermal cooling
                        </p>


                        

                    </div>
                </Col >


                
            </Row>




            <Row>
            <Col className='md-5 lg-5 '>
                    <div className=' mt-5'>
                        <h1 className='fw-bolder ps-3' style={{ fontSize: '45px', color: 'wheat' }}>TWENTY ONE SUGAR FACTORY</h1>
                        <div>
                        <h6 className='text-secondary ps-3'>MARCH 2023</h6>
                        </div>
                        <p className='ps-3 mt-5' style={{color:'wheat',lineHeight:'35px', fontSize:'18px'}}> 
                        Sugarcane has emerged as one of the major agricultural crops in the district of Latur, a region located in the heartland of the Indian subcontinent. In order to keep up with the increased production in the region, a new factory is currently under construction to process the sugarcane into sugar crystals. The new facility will have a capacity to process 7500 Tons of Cane per day. Interestingly, apart from producing sugar, sugar factories also produce molasses, alcohol and generate electricity.
                        </p>
                        <p className='ps-3 mt-1' style={{color:'wheat',lineHeight:'35px', fontSize:'18px'}}> 
                        In order to operate this complex production process smoothly, an administration and facilities centre is required near the factory. A large sawtooth roof of 94m x 34m acts as the entrance gate to the factory. Solar photovoltaic panels with a capacity of 500 kW electricity, cover both sides of the roof slopes. The entrance to the factory aligns with the main axis of the factory.                        </p>


                        

                    </div>
                </Col >
                <Col className='md-6 lg-6'  >
                    <img src="https://i.postimg.cc/9QgwWLkK/pexels-sebastian-s-rensen-731082.jpg" alt="" style={{ marginRight:'30px', marginTop:'60px'}} />
                </Col>
                


                
            </Row>
            
        </div>
    )
}

export default Blog