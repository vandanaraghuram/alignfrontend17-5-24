import React, { useState } from 'react'
import { Col, Container, Row, Toast } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import { addwork } from '../Services/allApi';
import Header from '../components/Header';



function Works() {
    //state to store image
    const [image, setImage] = useState("")
    //state to works
    const [workInput, setworkInput] = useState({
        description: "",
        wname: "",
        location: "",
        wtype: "",
        year: "",
        size: "",
        price: "",
       

    })
    // finvtion to get inputs
    const workData = (e) => {
        const { name, value } = e.target
        setworkInput({ ...workInput, [name]: value })
    }

    console.log(workInput);

    //upload image
    const chooseImage = (e) => {
        setImage(e.target.files[0])
    }
    console.log(image);


    const handleData = async (e) => {
        //to prevent auto refresh
        e.preventDefault();
        const { description, wname, location, wtype, year, size, price } = workInput;
        if (
            description == "" ||
            wname == "" ||
            location == "" ||
            wtype == "" ||
            year == "" ||
            size == "" ||
            price == ""
        ) {
            alert("please add complete details");
        } else {
            //setting header
            const headerConfig = {
                "Content-Type": "multipart/form-data",
            };

            //file type content sent chyumpo nammal form data typil aayirikanm body akath send cheyunnath
            //for that formtype body object create cheyyanm ennit aakanam data send cheyandath
            const data = new FormData();

            data.append("description", description);
            data.append("wname", wname);
            data.append("location", location);
            data.append("wtype", wtype);
            data.append("year", year);
            data.append("size", size);
            data.append("price", price);
            //nammal backend routes akath(multer use cheytha same name thanne key aayit kodukanam)
            data.append("user_profile", image);

            const result = await addwork(data, headerConfig);
            if (result.status >= 200 && result.status <= 300) {
                alert("data added sucessflluy");
                setworkInput({
                    ...workInput,
                    description: "",
                    wname: "",
                    location: "",
                    wtype: "",
                    year: "",
                    size: "",
                    price: "",
                   

                })
                setImage("");
            } else {
                console.log("unable to post");
            }
        }
    };


    return (
        // <div className='add_form_head bg-black'  style={{ padding: '1rem 0' }}>
        //     <Header></Header>
        //     <div>
        //         <h1 className='d-flex justify-content-center' style={{ color: "white" }}>ADD WORKS</h1>
        //         <Container className='container__wrapper'>
        //             <form>
        //                 <Row>
        //                     <Col>

        //                         <Form.Label className='label__style text-white' htmlFor="inputPassword5">Description </Form.Label>
        //                         <Form.Control
        //                             onChange={(e) => { workData(e) }}
        //                             type="text"
        //                             id="desn"
        //                             name="description"
        //                             aria-describedby="passwordHelpBlock"
        //                         />
        //                         <Form.Label className='label__style text-white' htmlFor="inputPassword5">Project Name</Form.Label>
        //                         <Form.Control
        //                             onChange={(e) => { workData(e) }}
        //                             type="text"
        //                             id="wnames"
        //                             name="wname"
        //                             aria-describedby="passwordHelpBlock"
        //                         />
        //                         <Form.Label className='label__style text-white' htmlFor="inputPassword5">Location</Form.Label>
        //                         <Form.Control
        //                             onChange={(e) => { workData(e) }}
        //                             type="text"
        //                             id="locations"
        //                             name="location"
        //                             aria-describedby="passwordHelpBlock"
        //                         />
        //                         <Form.Label className='label__style text-white' htmlFor="inputPassword5">Type of project</Form.Label>
        //                         <Form.Control
        //                             onChange={(e) => { workData(e) }}
        //                             type="text"
        //                             id="inputPassword55"
        //                             name="wtype"
        //                             aria-describedby="passwordHelpBlock"
        //                         />
        //                         <Form.Label className='label__style text-white' htmlFor="inputPassword5">Project Year</Form.Label>
        //                         <Form.Control
        //                             onChange={(e) => { workData(e) }}
        //                             type="text"
        //                             id="inputPassword58"
        //                             name="year"
        //                             aria-describedby="passwordHelpBlock"
        //                         />

        //                         <Form.Label className='label__style text-white' htmlFor="inputPassword5">Project size</Form.Label>
        //                         <Form.Control
        //                             onChange={(e) => { workData(e) }}
        //                             type="text"
        //                             id="inputPassword51"
        //                             name="size"
        //                             aria-describedby="passwordHelpBlock"
        //                         />

        //                         <Form.Label className='label__style text-white' htmlFor="inputPassword5">Project rate</Form.Label>
        //                         <Form.Control
        //                             onChange={(e) => { workData(e) }}
        //                             type="text"
        //                             id="inputPassword58"
        //                             name="price"
        //                             aria-describedby="passwordHelpBlock"
        //                         />

        //                         <Form.Label className='label__style text-white' htmlFor="inputPassword5">Project images</Form.Label>
        //                         <Form.Control
        //                             onChange={(e) => { chooseImage(e) }}
        //                             type="file"
        //                             id="inputPassword50"
        //                             name="profile"
        //                             aria-describedby="passwordHelpBlock"
        //                         />
        //                     </Col>

        //                 </Row>

        //                 <Row>
        //                     <button onClick={handleData} className='btn  mb-4 mt-4 ' style={{ backgroundColor: 'white', color: 'black' }}>ADD WORKS</button>
        //                 </Row>
        //             </form>
        //         </Container>
        //     </div>
        // </div>
        <div style={{backgroundColor:'black', height:'70rem'}}>
      <section className="works">
        <div className=" d-flex align-items-center h-100">
          <div className="container"  style={{ padding: '1rem 0' }}>
            <Header></Header>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card mt-3" style={{ borderRadius: '15px', height: '55rem', backgroundColor: 'black' }}>
                  <div className="card-body p-4">
                    <h1 className=" text-center text-white mb-5">ADD NEW WORKS</h1>

                    <form>

                      <div className="form-outline mb-3">
                        <input id="desn" onChange={(e) => workData(e)} type="text" name='description' className="form-control  form-control-lg" />
                        <label className="form-label text-white" >Add Description</label>
                      </div>
                     


                      <div className="form-outline mb-3">
                        <input id="wnames" onChange={(e) => workData(e)} type="text" name='wname' className="form-control form-control-lg" />
                        <label className="form-label text-white" >Add Project Name</label>
                      </div>

                      

                      <div className="form-outline mb-3">
                        <input id="locations" onChange={(e) => workData(e)} type="text" name='location' className="form-control form-control-lg " />
                        <label className="form-label text-white" >Add Location</label>
                      </div>
                     
                      <div className="form-outline mb-3">
                        <input id="inputPassword55" onChange={(e) => workData(e)} name='wtype' type="text" className="form-control form-control-lg " />
                        <label className="form-label text-white" >Type of Project</label>
                      </div>

                      <div className="form-outline mb-3">
                        <input  id="inputPassword58" onChange={(e) => workData(e)} name='year' type="text" className="form-control form-control-lg " />
                        <label className="form-label text-white" >Project Year</label>
                      </div>

                      <div className="form-outline mb-3">
                        <input id="inputPassword51" onChange={(e) => workData(e)} name='size' type="text" className="form-control form-control-lg " />
                        <label className="form-label text-white" >Project Size</label>
                      </div>

                      <div className="form-outline mb-3">
                        <input id="inputPassword58" onChange={(e) => workData(e)} name='price' type="text" className="form-control form-control-lg " />
                        <label className="form-label text-white" >Project Rate</label>
                      </div>

                      <div className="form-outline mb-3">
                        <input id="inputPassword50" onChange={(e) => chooseImage(e)} name='profile' type="file" className="form-control form-control-lg " />
                        <label className="form-label text-white" >Project Image</label>
                      </div>



                      <div className="d-flex justify-content-center">
                        <button 
                          className="btn btn-light text-dark" onClick={handleData}>ADD WORKS</button>
                      </div>

    
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Works