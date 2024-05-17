import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './Display.css'
import { addQuotes, getAllWorks } from '../Services/allApi';
import BASE_URL from '../Services/Baseurl';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';



function Display() {

    const navigate = useNavigate()
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

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    const getWorks = async () => {
        const { data } = await getAllWorks()
        console.log(data);
        setDisplay(data)
    }

    console.log(display);

    // api for quote

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addQuotes(inputs)
        console.log(result);
        alert("Data successfully sent,we will contact you shortly")
        navigate('/display')
        handleClose();
    }





    useEffect(() => {
        getWorks();
    }, [])



    return (
        <div className='display ' style={{ padding: '1rem 0' }}>
            <Header></Header>
            <h1 className='text-center p-2 text-warning' style={{ fontSize: '60px', color: 'wheat', fontWeight: '700' }}>OUR WORKS</h1>
            <Row>

                {display.length > 0 && display.map((i) => (
                    <Col sm={12} md={6} lg={4} >
                        <Card data-aos="fade-up-left" data-aos-duration="1500" className='mt-5 mb-4 ms-4' style={{ width: '26rem', height: '40rem', backgroundColor: '#fcf6e1' }}>
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
                                <Button onClick={handleShow} style={{ marginLeft: '33%' }} className='btn-sm btn-warning '>GET FREE QUOTE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))

                }
            </Row>


            {/* model */}

            <Modal show={show}  >
                <Modal.Header style={{ backgroundColor: '#fcf6e1' }} closeButton>
                    <Modal.Title style={{ backgroundColor: '#fcf6e1' }} >ENTER YOUR DETAILS</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#fcf6e1' }}>

                    <form >

                        <div className="form-outline mb-3">
                            <label className="form-label text-dark" >Your Name</label>
                            <input onChange={(e) => getInputs(e)} type="text" name='uname' className="form-control bg-warning  form-control-lg" placeholder="Full Name" />

                        </div>

                        <div className="form-outline mb-3">
                            <label className="form-label text-dark" >Your Email</label>
                            <input onChange={(e) => getInputs(e)} type="email" name='email' className=" bg-warning form-control form-control-lg"  placeholder="Email Address"/>

                        </div>


                        <div className="form-outline mb-3">
                            <label className="form-label text-dark" >Your phone</label>
                            <input onChange={(e) => getInputs(e)} type="number" name='phn' className=" bg-warning form-control form-control-lg "  placeholder="Phone Number" />

                        </div>

                    </form>

                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#fcf6e1' }}>

                    <Button onClick={handleSubmit} variant="warning">
                        SEND
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Display