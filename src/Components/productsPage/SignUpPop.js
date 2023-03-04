import React, { useEffect, useState } from "react";
import "./Pop.css";
import signimg from "../../Images/logo.png";
import axios from 'axios';

const SignUpPop = ({ closeModal }) => {

  axios.defaults.withCredentials = true;

  const [signup , setSignup] = useState(true);
  const [otp , setOtp] = useState(true);

  const [userDetails , setUserDetails] = useState({
    name: "",
    email:"",
    phone_number: "",
    city:""
  });

  const [loginDetails, setLoginDetails] = useState({
    phone_number:""
  });

  const [verifyDetails, setVerifyDetails] = useState({
    phone:"",
    hash: "",
    otp: ""
  })

  const changeHandler = (e) => {
    const {name , value} = e.target;
    setUserDetails({
      ...userDetails,
      [name]:value
    })
  };

  const changeHandlerLogin = (e) => {
    const {name , value} = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]:value
    })
    setVerifyDetails({
      ...verifyDetails,
      [name]: value
    })
  };

  const changeHandlerOtp = (e) => {
    const { name, value } = e.target;
    setVerifyDetails({
      ...verifyDetails,
      [name] : value
    })
  };

  const registerHandle = async(e) => {
    e.preventDefault();
    const {name, email, phone_number, city} = userDetails;
    if( name && email && city && phone_number ) {
      axios.post('https://gold-zealous-newt.cyclic.app/products' , userDetails)
      .then(res => {
        alert(res.data.status);
        setSignup(false);
        // closeModal();
      })
      .catch((err)=>console.log(err));
    }
    else{
      alert("Please enter credientials")
    }
  }

  // const loginHandle = async(e) => {
  //   e.preventDefault();
  //   const {phone_number} = loginDetails;
  //   if ( phone_number ) {
  //     axios.post('https://gold-zealous-newt.cyclic.app/login' , loginDetails)
  //     .then((res) => {
  //       const {status} = res.data;
  //       if ( status === "Log In Successful") {
  //         alert(status);
  //         // closeModal();
  //       }
  //       if(status === "User not found" ) {
  //         alert(status);
  //         setSignup(true);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  //   }
  //   else{
  //     alert("Please enter credientials")
  //   }
  // }

  const sendOtpHandle = async(e) => {
    e.preventDefault();
    const {phone_number} = loginDetails;
    if ( phone_number ) {
      axios.post('https://gold-zealous-newt.cyclic.app/login' , loginDetails)
      .then((res) => {
        const { status } = res.data;

        if ( status === "User found")
        {
          setOtp(false);
          axios.post('https://gold-zealous-newt.cyclic.app/sendotp' , loginDetails)
          .then((res) => {
            verifyDetails.phone = res.data.phone;
            verifyDetails.hash = res.data.hash;
            console.log(res.data.otp);
            alert(res.data.message);
          })
          .catch((err) => console.log(err))
        }
        if ( status === "User not found" ) {
          alert(status);
          setSignup(true);
        }
      })
      .catch((err) => console.log(err));
    }
    else {
      alert("Please enter your number");
    }
  }

  const submitOtpHandle = async(e) => {
    e.preventDefault();
    const { otp } = verifyDetails;
    if ( otp ) {
      axios.post('https://gold-zealous-newt.cyclic.app/verifyotp' , verifyDetails)
      .then((res) => {
        // const { status } = res.data;
        if ( res.status === 202 ) {
          console.log(res.data);
          window.location.reload(); //pta nhi kyu 
          alert('Log In Successful');
          closeModal();
        }
      })
      .catch((err) => console.log(err));
    }
    else {
      alert("Please Enter your OTP")
    }
  }



  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper"></div>
       
      <div className='modal-container'>
         <div className='d-flex'>
            <div className="imgBx mx-auto text-center my-auto">
                <img className="mg" src={signimg} alt="logo" />
            </div>
            <div className="formBx">
              { signup ?
                <form action="post" onSubmit={registerHandle}>
                  <h2>Sign up</h2>
                  <input type="text" name="name" id="name" placeholder="Name" onChange={changeHandler} value={userDetails.name}/>
                  <input type="email" name="email" id="email" placeholder="Email" onChange={changeHandler} value={userDetails.email}/>
                  <input type="text" name="phone_number" placeholder="Phone Number" onChange={changeHandler} value={userDetails.phone_number}/>
                  <input type="text" name="city" placeholder="City" onChange={changeHandler} value={userDetails.city}/>
                  <button className="btn btn-warning mt-2" type="submit" onClick={registerHandle} >Submit</button>
                  <p className="mt-2">already registered ?<span onClick={() => {setSignup(false)}}>Log In</span></p>
                </form>
                :
                <>
                {otp ? 
                <form action="post" onSubmit={sendOtpHandle}>
                  <h2>Log In</h2>
                  {/* <input type="email" name="email" id="email" placeholder="Email" onChange={changeHandlerLogin} value={loginDetails.email} required/> */}
                  <input type="text" name="phone_number" placeholder="Phone Number" onChange={changeHandlerLogin} value={loginDetails.phone_number} required/>
                  <button className="btn btn-warning mt-2" type="submit" onClick={sendOtpHandle}>Send OTP</button>
                  <p className="mt-2">New user ? <span onClick={() => setSignup(true)}>Register</span></p>
                </form>
                :
                <form action="post" onSubmit={submitOtpHandle}>
                  <h2>Log In</h2>
                  <input type="text" name="phone_number" placeholder="Phone Number" value={verifyDetails.phone} required/>
                  <input type="text" name="otp" placeholder="OTP" onChange={changeHandlerOtp} value={verifyDetails.otp} required/>
                  <button className="btn btn-warning mt-2" type="submit" onClick={submitOtpHandle}>Submit</button>
                  <p className="mt-2">New user ? <span onClick={() => setSignup(true)}>Register</span></p>
                </form>
                }
                </>
              }
              </div>
            </div>
      </div>
    </>
  );
};

export default SignUpPop;
