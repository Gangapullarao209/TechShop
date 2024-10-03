// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { RiUser3Line } from "react-icons/ri";
// import { HiOutlineShoppingCart } from "react-icons/hi";
// import { BsSearch } from "react-icons/bs";
// import Modal from 'react-modal'
// // import { GoHorizontalRule } from "react-icons/go";
// import './Navbar.css'
// // import { Button } from 'bootstrap';
// import Login from './Login';

// export default function Navbar() {
//   const [visible, setVisible] =useState(false)


  
 
//   return (
//     <div className='navbar'>
//        <Link to='/' id='title' style={{ paddingLeft:'60px',marginRight:'520px',textDecoration:'none',color:'white',fontSize:'25px', fontWeight:'700'}}>Tech-Shop</Link>
//         <div className='Links'>
         
//          <Link to='/Search' style={{marginRight:'50px'}} ><BsSearch/></Link>
//          <Link to='/Cart' style={{marginRight:'50px'}}>< HiOutlineShoppingCart/></Link>
//          <Link   onMouseEnter={()=>setVisible(true)} ><RiUser3Line  /></Link>
        
//          <Modal isOpen={visible} onRequestClose ={()=>setVisible(false)}   
//          style={{
//           overlay:{
//             background:'transparent'
//           },
//           content:{
//             height:'49%',
//             width:'25%',
//             marginLeft:'60%',
//             top:'15%',
//             backgroundColor:'#0d0d0d',
//             borderRadius:'3px',
//             position:'absolute',
//            overflow:'hidden'
             
//           },
          
         
        
//          }}
         
         
//          >
//           {/* <h1 type='button' onClick={()=>setVisible(false)} >X</h1> */}
//            <div
              
//               style={{
//                 color:'#CDD7E2',
                
                 
                
//               }}
              
//               >
//            <h5>Hello!</h5>
//            <p style={{fontSize:'15px'}}>Access account and manage orders</p>
//            {/* <span type='button'  style={{border:'1px solid #CDD7E2', padding:'5px 8px 8px 8px',borderRadius:'3px',marginTop:'-10px'}}>Login/Signup</span> */}
//            <span
//         type='button'
//         style={{ border: '1px solid #CDD7E2', padding: '5px 8px 8px 8px', borderRadius: '3px', marginTop: '-10px', cursor: 'pointer' }}
        
//       >
//         Login/Signup
//       </span>

       
           
           
           
//            <br/>
//            {/* <GoHorizontalRule style={{paddingTop:'10px'}}/> */}
//            <hr style={{border:'1px solid ',marginTop:'10px'}}/>
//           <p type='button' style={{marginTop:'-10px',fontSize:'15.5px'}}>Orders<br/>
//           <span type='button'>Wishlist</span><br/>
//           <span type='button'>Gift Cards</span><br/>
//           <span type='button'>Saved Cards</span><br/>
//           <span type='button'>Saved Addresses</span></p>
//            </div>
           
//         </Modal>
        

//         </div>
         
//     </div>
//   )
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiUser3Line } from 'react-icons/ri';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import Modal from 'react-modal';
import './Navbar.css';
import { Login } from './Login';

export default function Navbar() {
  const [mainModalVisible, setMainModalVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const handleMainModalOpen = () => {
    setMainModalVisible(true);
    setLoginModalVisible(false);
  };

  return (
    <div className="navbar">
      <Link to="/" id="title" style={{ paddingLeft: '60px', marginRight: '520px', textDecoration: 'none', color: 'white', fontSize: '25px', fontWeight: '700' }}>
        Tech-Shop
      </Link>
      <div className="Links">
        <Link to="/Search" style={{ marginRight: '50px' }}>
          <BsSearch />
        </Link>
        <Link to="/Cart" style={{ marginRight: '50px' }}>
          <HiOutlineShoppingCart />
        </Link>
        <Link onMouseEnter={handleMainModalOpen}>
          <RiUser3Line />
        </Link>

        <Modal
          isOpen={mainModalVisible}
          onRequestClose={() => setMainModalVisible(false)}
          style={{
            overlay: {
              background: 'transparent',
            },
            content: {
              height: '49%',
              width: '25%',
              marginLeft: '60%',
              top: '15%',
              backgroundColor: '#0d0d0d',
              borderRadius: '3px',
              position: 'absolute',
              overflow: 'hidden',
            },
          }}
        >
          <div
            style={{
              color: '#CDD7E2',
            }}
          >
            <h5>Hello!</h5>
            <p style={{ fontSize: '15px' }}>Access account and manage orders</p>
            <span
              type="button"
              style={{ border: '1px solid #CDD7E2', padding: '5px 8px 8px 8px', borderRadius: '3px', marginTop: '-10px', cursor: 'pointer' }}
              onClick={() => setLoginModalVisible(true)}
            >
              Login/Signup
            </span>
            <br />
            <hr style={{ border: '1px solid ', marginTop: '10px' }} />
            <p type="button" style={{ marginTop: '-10px', fontSize: '15.5px' }}>
              Orders<br />
              <span type="button">Wishlist</span>
              <br />
              <span type="button">Gift Cards</span>
              <br />
              <span type="button">Saved Cards</span>
              <br />
              <span type="button">Saved Addresses</span>
            </p>
          </div>
        </Modal>

        {loginModalVisible && <Login onClose={() => setLoginModalVisible(false)} />}
      </div>
    </div>
  );
}
