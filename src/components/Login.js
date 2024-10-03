// import React from 'react'
//  import { IoClose } from "react-icons/io5";
//  export default function Login() {
//   return (
//     <div style={{height:'400px', width:'350px' ,border:'1px solid white', borderRadius:'5px',backgroundColor:'#0f0f0f',}}>
//         <div style={{paddingLeft:'25px',paddingTop:'30px'}}>
//             <p style={{fontSize:'25px', fontWeight:'800', fontFamily:'arial',color:'white'}}>Login</p>
//             <p style={{color:'white'}}>New to Tech-Shop ? <strong>Create an account</strong></p>
//             <input type='email' placeholder='Password' style={{height:'35px',paddingInline:'15px',paddingBottom:'5px', width:'85%',background:'none',border:'1px solid white',borderRadius:'3px',color:'white'}}/>
//             <input type='password' placeholder='Password' style={{height:'35px',paddingInline:'15px',paddingBottom:'5px', width:'85%',background:'none',border:'1px solid white',borderRadius:'3px',color:'white',marginTop:'10px'}}/><br/>
//             <span  type='button' style={{height:'40px',width:'85%',backgroundColor:'red',marginTop:'13px',borderRadius:'3px', textAlign:'center',paddingTop:'5px',color:'white',fontSize:'17px',fontWeight:'600'}}>Login</span><br/>
//              <p style={{width:'85%',height:'1px',border:'1px solid white',marginTop:'7%',position:'relative'}}/>
//              <span style={{marginLeft:'7%', color:'white',fontFamily:'sans-serif',fontWeight:'500',position:'absolute',marginTop:'-29px', backgroundColor:'#0f0f0f',paddingLeft:'18px',paddingRight:'18px'}}> or login with</span>   
//         </div>
//         <div style={{marginTop:'12%',marginLeft:'25px'}}>
//             <button style={{backgroundColor:'#3140b0',color:'white',border:'none',borderRadius:'2px',padding:'8px', width:'27%'}}>Facebook</button>
//             <button style={{backgroundColor:'#910715',color:'white',border:'none',borderRadius:'2px',padding:'8px', width:'27%',marginLeft:'6px'}}>Google</button>
//             <button style={{backgroundColor:'#278ef5',color:'white',border:'none',borderRadius:'2px',padding:'8px', width:'27%',marginLeft:'8px'}}>Twitter</button>
//        </div>
      // <span style={{position:'absolute',marginTop:'-355px',marginLeft:'310px'}}>
      //   <IoClose type='submit'   style={{color:'white',fontSize:'30px'}}/>
      // </span>
         


//     </div>
//   )
// }

// import React, { useState } from 'react'
// import Modal from 'react-modal'
// import { IoClose } from "react-icons/io5";


 
// export const Login = () => {
//   const [loginVisible, setLoginVisible]=useState(false)

//   return (
//     <div>
//       <Modal isOpen={true} onRequestClose={()=>setLoginVisible(false)}>
//         <h1>Login Form</h1>
//         <span onClick={()=>setLoginVisible(false)} type='button'>
//         <IoClose    style={{color:'red',fontSize:'30px'}}  />
//       </span>
//       </Modal>
//     </div>
//   )
// }
import React, { useState } from 'react';
import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';

export const Login = ({ onClose }) => {
  const [showLogin, setShowLogin] = useState(true);

  const handleSwitchForm = () => {
    setShowLogin((prev) => !prev);
  };

  const onsubmit=()=>{
    alert("Login successful")
  }

  return (
    <div>
      <Modal isOpen={true} onRequestClose={onClose}
      
      style={{
        overlay:{
          background:'transparent'
        },
        content:{
          height:'60%',
          width:'27%',
          marginLeft: '0%',
          top: '20%',
          backgroundColor: '#0d0d0d',
          overflow: 'hidden',
          borderRadius:'4px',
          
        }

      }}
      
      >
        <h4 style={{color:'whitesmoke',fontWeight:'700'}}>{showLogin ? 'Login' : 'Signup Form'}</h4>
        <span onClick={onClose} type="button" style={{position:'absolute',marginTop:'-20%',marginLeft:'87%',backgroundColor:'black'}}>
          <IoClose style={{ color: 'whitesmoke', fontSize: '20px' }} />
        </span>

        {showLogin ? (
          <>
            {/* Login Form */}
            <div   >
              
              <p style={{fontSize:'15px',color:'#c9d0d8',marginTop:'-6px'}}>New to TechShop ?
          
            <span type="button" onClick={handleSwitchForm} style={{fontWeight:'500'}}>
                Create an account
              </span>
              </p>
               
              <input type="text" placeholder="  Email"  required style={{width:'93%',padding:'5px 6px',borderRadius:'1px',border:'1px solid #c9d0d8',color:'white',outline:'none',backgroundColor:'black'}}/>
        
              <input type='password' placeholder="  Password"  required style={{width:'93%',padding:'5px 6px',borderRadius:'1px',border:'1px solid #c9d0d8',color:'white',outline:'none',backgroundColor:'black',marginTop:'8px'}}/>
              <button type='submit'  style={{outline:'none',backgroundColor:'red',marginTop:'15px',border:'none', width:'93%',height:'35px',fontSize:'15px',fontWeight:'700',color:'#c9d0d8',borderRadius:'1px'}}>Login</button>

     <div style={{ position: 'relative', marginTop:'10%'}}>
      <hr
        style={{
          border: 'none',
          height: '1px',
          backgroundColor: '#c9d0d8',
          width:'93%' // Adjust the color as needed
        }}
      />
      <span
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '0 10px', // Adjust padding as needed
          backgroundColor: '#0d0d0d', // Adjust the background color as needed
          color: 'white', // Adjust the text color as needed
          marginLeft:'25%',
          fontSize:'14px',
          fontWeight:'600'
        }}
      >
        Or login with
      </span>
    </div>

       
        <div style={{display:'flex',gap:'10px',marginTop:'8%'}}>
          <p type='button' style={{background:'#0e49ac',padding:'7px',fontSize:'14px',color:'white'}}>Facebook</p>
          <p type='button' style={{background:'red',padding:'7px',fontSize:'14px',color:'white',paddingleft:'10%',width:'30%',textAlign:'center'}}>Google</p>
          <p type='button' style={{background:'blue',padding:'7px',fontSize:'14px',color:'white',width:'29%',textAlign:'center'}}>Twitter</p>

        </div>




            </div>
          </>
        ) : (
          <>
            {/* Signup Form */}
            <div>
              <label>Username</label>
              <input type="text" placeholder="Enter username" />
              <label>Email</label>
              <input type="email" placeholder="Enter email" />
              <label>New Password</label>
              <input type="password" placeholder="Enter new password" />
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm password" />
              <button type="button">Signup</button>
              <p>Already a user? Login here.</p>
              <button type="button" onClick={handleSwitchForm}>
                Login
              </button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};
