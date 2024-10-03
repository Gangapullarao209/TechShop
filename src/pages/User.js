import React, { useState } from 'react'
import Modal from 'react-modal'
import Navbar from '../components/Navbar'


import React from 'react'

export const User = () => {


  const [visible,setVisible]=useState(false)
  return (
    <div>
      <Navbar/>
      <Modal isOpen={true}>



      </Modal>
    </div>
  )
}
