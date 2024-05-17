import React, { useState } from 'react'
import './Signup.css'
import { Adminregister } from '../Services/allApi'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'



function Signup() {


  const [inputs, setInputs] = useState({
    uname: "",
    email: "",
    psw: "",
    cpsw: "",
  })

  const [unameValid, setUnameValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)
  const [pswValid, setPswValid] = useState(true)

  const navigate = useNavigate()

  const signupData = (e) => {
    const { name, value } = e.target
    // console.log(name, value);

    if (name == 'uname') {
      if (value.match(/^[a-zA-Z]+$/)) {
        setUnameValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setUnameValid(false)
      }
    }

    //email
    if (name == 'email') {
      if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        setEmailValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setEmailValid(false)
      }
    }

    //psw

    if (name === 'psw') {
      if (value.match(/^[a-zA-Z0-9]+$/)) {
        setPswValid(true)
        setInputs({ ...inputs, [name]: value })

      }
      else {
        setPswValid(false)
      }
    }


    //psw

    if (name === 'cpsw') {
      setInputs({ ...inputs, [name]: value })

    }

  }
  console.log(inputs);





  const handleSubmit = async (e) => {
    e.preventDefault();
    const { uname, email, psw, cpsw } = inputs
    if (uname == "") {
      alert("Username required ")
    }

    else if (email == "") {
      alert("Email required ")
    }

    else if (psw == "") {
      alert("Password  required ")
    }

    else if (cpsw == "") {
      alert("Confirm password  required ")
    }
    else {
      if (psw == cpsw) {
        const result = await Adminregister(inputs)
        console.log(result);
        alert("registered successfully")
        // console.log(result);
        navigate('/login')
      }
      else {
        alert("Password and confirm password must be same")
      }
    }



  }

  return (
    <div>
      <section className=" signup vh-100">
        <div className="mask d-flex align-items-center h-100">
          <div className="container" style={{ padding: '1rem 0' }}>
            <Header></Header>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px', height: '40rem', backgroundColor: 'black' }}>
                  <div className="card-body p-4">
                    <h2 className="text-uppercase text-center text-warning mb-5">Create your account</h2>

                    <form>

                      <div className="form-outline mb-3">
                        <input onChange={(e) => signupData(e)} type="text" name='uname' style={{ outline: 'none', border: 'none', backgroundColor: '#ffdf87' }} className="form-control  form-control-lg" />
                        <label className="form-label text-warning" >Your Name</label>
                      </div>
                      {!unameValid &&
                        <div>
                          <p className='text-danger'>*Invalid email</p>
                        </div>}



                      <div className="form-outline mb-3">
                        <input onChange={(e) => signupData(e)} type="email" name='email' style={{ outline: 'none', border: 'none', backgroundColor: '#ffdf87' }} className="form-control form-control-lg" />
                        <label className="form-label text-warning" >Your Email</label>
                      </div>

                      {!emailValid &&
                        <div>
                          <p className='text-danger'>*Invalid email</p>
                        </div>}

                      <div className="form-outline mb-3">
                        <input onChange={(e) => signupData(e)} type="password" name='psw' style={{ outline: 'none', border: 'none', backgroundColor: '#ffdf87' }} className="form-control form-control-lg " />
                        <label className="form-label text-warning" >Password</label>
                      </div>
                      {!pswValid &&
                        <div>
                          <p className='text-danger'>*Invalid email</p>
                        </div>}
                      <div class="form-outline mb-3">
                        <input onChange={(e) => signupData(e)} name='cpsw' style={{ outline: 'none', border: 'none', backgroundColor: '#ffdf87' }} type="password" className="form-control form-control-lg " />
                        <label className="form-label text-warning" >Repeat your password</label>
                      </div>



                      <div className="d-flex justify-content-center">
                        <button type="button"
                          className="btn btn-outline-warning w-50" onClick={handleSubmit}>REGISTER</button>
                      </div>
                      <Link className='text-decoration-none' to={'/login'}>
                        <p className="text-center text-secondary mt-3 mb-0">Have already an account? <a href="#!"
                          className="fw-bold  text-warning" ><u>Login here</u></a></p>
                      </Link>
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

export default Signup