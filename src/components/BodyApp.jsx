import React from 'react'
import './BodyApp.css'
import Carrousel from './Carrousel';
import BodyAppSection from './BodyAppSection';
import BodyAppSection2 from './BodyAppSection2';

function BodyApp() {
  return (
    <>
      <Carrousel/>
      <BodyAppSection dataSection={"1"}/>
      <BodyAppSection2 dataSection={"2"}/>
      <BodyAppSection dataSection={"3"}/>
    </>
  )
}

export default BodyApp