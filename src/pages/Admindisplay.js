import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './Admindisplay.css'
import { addQuotes, getAllWorks } from '../Services/allApi';
import BASE_URL from '../Services/Baseurl';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';



function Admindisplay() {

    const navigate=useNavigate()
    const [inputs, setInputs] = useState({
        uname: "",
        email: "",
        phn: ""
    })

    const getInputs = (e) => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
    }
    console.log(inputs);

    const [display, setDisplay] = useState({})

 


    const getWorks = async () => {
      const { data } = await getAllWorks()
        console.log(data);
        setDisplay(data)
    }
    
    console.log(display);

// api for quote

const handleSubmit=async(e)=>{
    e.preventDefault();
    const result=await addQuotes(inputs)
    console.log(result);
    
    navigate('/adminedit');
}





    useEffect(() => {
        getWorks();
    }, [])



    return (
        <div className='display ' style={{ padding: '1rem 0' }}>
<Header></Header>
            <h1 className='text-center p-2' style={{ fontSize: '60px', color: 'white', fontWeight: '700' }}>OUR WORKS</h1>
            <Row>

                {display.length > 0 && display.map((i) => (
                    <Col sm={12} md={6} lg={4} >
                        <Card data-aos="fade-up-left"  data-aos-duration="1500" className='mt-5 mb-4' style={{ width: '26rem', height: '40rem' }}>
                            <div>
                                <Card.Img className='cardimg' style={{ width: '100%', height: '20rem' }} variant="top" src={`${BASE_URL}/worksimage/${i.profile}`} />
                            </div>
                            <Card.Body>
                                <Card.Title className='text-dark text-center fw-bolder fs-4'>{i.wname}</Card.Title>
                                <Card.Text>
                                    {i.description} <br />

                                    <hr />
                                    TYPE: {i.wtype} <br />
                                    YEAR: {i.year} <br />
                                    SIZE: {i.size} <br />
                                    PRICE: {i.price}
                                </Card.Text>
                                <Button onClick={handleSubmit} style={{ marginLeft: '40%' }} className='btn-sm btn-dark '>EDIT</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))

                }
            </Row>



        </div>
    )
}

export default Admindisplay