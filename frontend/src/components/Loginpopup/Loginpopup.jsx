import React, {  useContext, useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { StoreContext } from '../../context/Storecontext'
const Loginpopup = ({setShowLogin}) => {
    const {url,setToken} =useContext(StoreContext)
    const [currState,setCurrState]=useState("Sign Up")
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
    })
    const onchnagehandler=(event)=>{
        const name =event.target.name;
        const value= event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    const onloginin =async (event)=> {
        event.preventDefault();
        let newurl =url;
        if(currState==="Login"){
            newurl+="/api/user/login"
        }
        else{
            newurl+="/api/user/register"
        }
        const response =await axios.post(newurl,data);

        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token)
            setShowLogin(false);
        }
        else{
            alert(response.data.message)
        }
    }
  return (
    <div className='login-popup'>
        <form onSubmit={onloginin} action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:
                <input type="text" name='name' onChange={onchnagehandler} vvalur={data.name} placeholder='Enter Your Name' required/>}
                <input type="text" name='email' onChange={onchnagehandler}  value={data.email} placeholder='Enter Your Email' required/>
                <input type="password" name='password' onChange={onchnagehandler}  value={data.password} placeholder='Enter Password' required/>
                <button type='submit'  >{currState==="Sign Up"?"Create Account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>I Agree to Terms and Conditions of Foodzy</p>
                </div>
                {currState==="Login"
                ?<p>create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
                :<p>Already have account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
                }
            </div>
        </form>
    </div>
  )
}

export default Loginpopup