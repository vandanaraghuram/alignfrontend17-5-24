import React from 'react'
import './Adminedit.css'
import Header from '../components/Header'



function Adminedit() {

  

  return (
    <div style={{backgroundColor:'black', height:'70rem'}}>
    <section className="works">
      <div className=" d-flex align-items-center h-100">
        <div className="container"  style={{ padding: '1rem 0' }}>
          <Header></Header>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card mt-3" style={{ borderRadius: '15px', height: '55rem', backgroundColor: 'black' }}>
                <div className="card-body p-4">
                  <h1 className=" text-center text-white mb-5">EDIT WORKS</h1>

                  <form>

                    <div className="form-outline mb-3">
                      <input id="desn"  type="text" name='description' className="form-control  form-control-lg" />
                      <label className="form-label text-white" >Add Description</label>
                    </div>
                   


                    <div className="form-outline mb-3">
                      <input id="wnames"  type="text" name='wname' className="form-control form-control-lg" />
                      <label className="form-label text-white" >Add Project Name</label>
                    </div>

                    

                    <div className="form-outline mb-3">
                      <input id="locations"  type="text" name='location' className="form-control form-control-lg " />
                      <label className="form-label text-white" >Add Location</label>
                    </div>
                   
                    <div className="form-outline mb-3">
                      <input id="inputPassword55"  name='wtype' type="text" className="form-control form-control-lg " />
                      <label className="form-label text-white" >Type of Project</label>
                    </div>

                    <div className="form-outline mb-3">
                      <input  id="inputPassword58"  name='year' type="text" className="form-control form-control-lg " />
                      <label className="form-label text-white" >Project Year</label>
                    </div>

                    <div className="form-outline mb-3">
                      <input id="inputPassword51"  name='size' type="text" className="form-control form-control-lg " />
                      <label className="form-label text-white" >Project Size</label>
                    </div>

                    <div className="form-outline mb-3">
                      <input id="inputPassword58"  name='price' type="text" className="form-control form-control-lg " />
                      <label className="form-label text-white" >Project Rate</label>
                    </div>

                    <div className="form-outline mb-3">
                      <input id="inputPassword50"  name='profile' type="file" className="form-control form-control-lg " />
                      <label className="form-label text-white" >Project Image</label>
                    </div>



                    <div className="d-flex justify-content-center">
                      <button 
                        className="btn btn-light text-dark" >EDIT</button>
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

export default Adminedit