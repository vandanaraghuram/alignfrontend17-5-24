import React, { useState } from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import './Contact.css'
import emailjs from "@emailjs/browser";
import Header from '../components/Header';


function Contact() {

    const [contactInput,setContactInput]=useState({
        uname:"",
        phn:"",
        msg:"",
        email:"",
        subject:""

    })

    const contactData=(e)=>{
        const {name,value}=e.target
        setContactInput({...contactInput, [name]:value})
    }
    console.log(contactInput);


//eamil


const handleSubmit = (e) => {
    e.preventDefault();
    const service_id = "service_p7v0zej";
    const templete_id = "template_5bnzaf8";
    const public_key = "fHn24rIHHoealPWJl";

    const templateParams = {
      from_name: contactInput.uname,
      to_name: "Align Developers",
      from_phn: contactInput.phn,
      from_email: contactInput.email,
      to_sub:contactInput.subject,
      message: contactInput.msg

    };
    emailjs
      .send(service_id, templete_id, templateParams, public_key)
      .then((result) => {
        console.log("success", result);
        setContactInput({
          ...contactInput,
          uname:"",
          phn:"",
          msg:"",
          email:"",
          subject:""
        });
        alert("message send successfully");
      })
      .catch((error) => {
        console.log("error", error);
        alert("unable to send message");
      });
    
  };









  return (
    <div className='contact bg-black'  style={{ padding: '1rem 0' }} >
        <Header></Header>
        <h1 className='head text-center pt-5'>Get In Touch</h1>
        <Row className='mt-5'>
<Col className='md-3 lg-3 ms-5'>
    <form action="">
        <div>
        <label style={{fontSize:'25px',color:'white'}} htmlFor="fullname">Full name</label> <br />
        <input onChange={(e)=>{contactData(e)}} name='uname' type="text" className='text-white'  />
        </div>
        
        <div>
        <label style={{fontSize:'25px',color:'white', marginTop:'50px'}} htmlFor="phn">Phone number</label> <br />
        <input onChange={(e)=>{contactData(e)}} name='phn' type="text" className='text-white'  />
        </div>


        <div>
        <label style={{fontSize:'25px',color:'white', marginTop:'50px',border:'2px'}} htmlFor="message">Message</label> <br />
        <p style={{color:'grey'}}>Tell us more about your project...</p>
        <input onChange={(e)=>{contactData(e)}} name='msg' type="textarea" className='text-white'  />
        </div>
        
    </form>

    <Button variant='light ' onClick={handleSubmit} className='mt-5 btn-lg' style={{borderRadius:'40px'}}>SEND MESSAGE</Button>

</Col>



<Col className='md-3 lg-3 ms-5 mt-3' >
    <form action="">
        <div>
        <label style={{fontSize:'25px',color:'white'}} htmlFor="fullname">Email address</label> <br />
        <input name='email' onChange={(e)=>{contactData(e)}}  type="text" className='text-white'  />
        </div>
        
        <div>
        <label style={{fontSize:'25px',color:'white', marginTop:'50px'}} htmlFor="phn">Subject</label> <br />
        <input name='subject' onChange={(e)=>{contactData(e)}} type="text" className='text-white' placeholder="Eg:Decoration"  />
        </div>


       
        
    </form>

</Col>


<Col className='col-md-5 col-lg-5  mt-3' >
    
    <h4 style={{color:'white', marginLeft:'40px'}} >MORE CONTACT INFORMATION</h4>
    <p style={{color:'grey', marginLeft:'40px'}}>We are here to help and answer any question you might have <br />We look forward to hearing from you</p>

<Row style={{marginTop:'50px'}}>
    <Col className='col-md-2 col-lg-2 me-0'>
<div>
<i className="fa-regular fa-2xl fa-envelope-open ms-5" style={{color: 'white', marginTop:'30px'}}></i>
</div>
    </Col>
    <Col className='col-md-10 col-lg-10 ms-0 fs-5'>
<div>
    <p style={{color:'grey'}}>Send us a message <br /> <span className='text-white'>aligndevelopers@gmail.com</span> </p> 
   
</div>
    </Col>
    <Col className='col-md-2 col-lg-2 me-0'>
<div>
<i class="fa-solid fa-phone-volume fa-2xl ms-5" style={{color: 'white', marginTop:'30px'}}></i>
</div>
    </Col>
    <Col className='col-md-10 col-lg-10 ms-0 fs-5'>
<div>
    <p  style={{color:'grey'}}>Give us a call <br /> <span className='text-white'>(+91) 7306600917</span> </p> 
   
</div>
    </Col>
</Row>


</Col>
        </Row>
    </div>
  )
}

export default Contact