import React from 'react'
import './BodyApp.css'
import Carrousel from './Carrousel';
import Bodyappsection from './Bodyappsection';
import Bodyappsection2 from './Bodyappsection2';

function Bodyapp() {
  return (
    <>
      <Carrousel/>
      <Bodyappsection dataSection={"1"}/>
      <Bodyappsection2 dataSection={"2"}/>
      <Bodyappsection dataSection={"3"}/>
    </>
  )
}

export default Bodyapp