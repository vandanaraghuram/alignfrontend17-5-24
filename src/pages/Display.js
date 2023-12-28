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

const handleSubmit=async(e)=>{
    e.preventDefault();
    const result=await addQuotes(inputs)
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
                                <Button onClick={handleShow} style={{ marginLeft: '33%' }} className='btn-sm btn-dark '>GET FREE QUOTE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))

                }
            </Row>


            {/* model */}

            <Modal show={show} >
                <Modal.Header closeButton>
                    <Modal.Title>ENTER YOUR DETAILS</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form>

                        <div className="form-outline mb-3">
                            <input onChange={(e) => getInputs(e)} type="text" name='uname' className="form-control  form-control-lg" />
                            <label className="form-label text-dark" >Your Name</label>
                        </div>

                        <div className="form-outline mb-3">
                            <input onChange={(e) => getInputs(e)} type="email" name='email' className="form-control form-control-lg" />
                            <label className="form-label text-dark" >Your Email</label>
                        </div>


                        <div className="form-outline mb-3">
                            <input onChange={(e) => getInputs(e)} type="number" name='phn' className="form-control form-control-lg " />
                            <label className="form-label text-dark" >Your phone</label>
                        </div>

                    </form>

                </Modal.Body>
                <Modal.Footer>

                    <Button onClick={handleSubmit} variant="dark">
                        SEND
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Display