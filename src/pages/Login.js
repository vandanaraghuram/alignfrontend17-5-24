import React, { useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { adminLogin } from '../Services/allApi'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

function Login() {


  const [logInputs, setLogInputs] = useState({
    email: "",
    psw: ""
  })

  const [emailValid, setEmailValid] = useState(true)
  const [pswValid, setPswValid] = useState(true)

  const navigate=useNavigate();


  const loginData = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    // console.log(name,value);
    if(name=='email'){
      if(value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        setEmailValid(true)
        setLogInputs({...logInputs, [name]:value})
      }
      else{
        setEmailValid(false)
      }
    }

    if(name=='psw'){
      if(value.match(/^[a-zA-Z0-9]+$/)){
        setPswValid(true)
        setLogInputs({...logInputs, [name]:value})
      }
      else{
        setPswValid(false)
      }
    }
    
  }


  console.log(logInputs);


 const handleLogin=async()=>{
  
  const {email,psw}=logInputs
   if(email==="" || psw===""){
    alert("All fields are required")
   }
   else{
    const result= await adminLogin(logInputs)
    console.log(result.data);
    if(result.status>=200 && result.status<=300){
      // setLoginData(true)
      localStorage.setItem("isloggedin",result.data.isAdmin)
      localStorage.setItem("token",result.token)
      alert("Login Successful")
      
      navigate('/')

    }
    else{
    
      alert(result.data);
    }
   }

  }




  return (
    <div className='login' >
      <section className=" gradient-custom p-3">
      <Header></Header>
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card text-white" style={{ borderRadius: '1rem', backgroundColor: 'black', height: '42rem' }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase" style={{color:'wheat'}}>Login</h2>
                    <p className="text-white-50 mb-5">Please enter your email and password!</p>

                    <div className="form-outline form-white mb-4" style={{color:'wheat'}}>
                    <label class="form-label" for="typeEmailX">Email</label>
                      <input onChange={(e) => { loginData(e) }} type="email" name='email' className="form-control form-control-lg" placeholder="Email Address" style={{outline:'none', border:'none',backgroundColor: '#ffdf87'}} />
                     
                    </div>

                    <div className="form-outline form-white mb-4" style={{color:'wheat'}}>
                    <label className="form-label" for="typePasswordX">Password</label>
                      <input onChange={(e) => { loginData(e) }} type="password" name='psw' className="form-control form-control-lg " style={{outline:'none', border:'none',backgroundColor: '#ffdf87'}}  placeholder="Password" />
                     
                    </div>

                    {/* <p className="small mb-5 pb-lg-2"><a class="text-white-50" >Forgot password?</a></p> */}

                    <button onClick={handleLogin} className="btn btn-outline-warning btn-lg px-5" type="submit">Login</button>

                    <div>
                      <p className='text-white-50' style={{ fontSize: '15px', marginTop: '30px' }}>OR LOGIN WITH</p>
                    </div>

                    <div className="d-flex justify-content-center text-center mt-0 pt-1">

                      <a style={{color:'wheat'}}><i className="fab fa-facebook-f fa-lg"></i></a>
                      <a style={{color:'wheat'}}><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                      <a style={{color:'wheat'}}><i className="fab fa-google fa-lg"></i></a>
                    </div>
                    <Link className='text-decoration-none' to={'/signup'}>
                      <p className=" mt-2 text-decoration-none text-white-50">Dont have account? <a className="fw-bold text-decoration-none" style={{color:'wheat'}}>Sign Up</a>
                      </p>
                    </Link>
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

export default Login