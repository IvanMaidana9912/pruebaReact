import React from "react";
import sectionJSON from "./json/bodySectionsData.json"

const Bodyappsection2 = ({ dataSection }) => {

  return (
    <section className='section-vrv'>
      <div className='div-vrv'>
        <h5>{sectionJSON.map(sec => sec.section === dataSection ? sec.concept : "")}</h5>
        <h2>{sectionJSON.map(sec => sec.section === dataSection ? sec.title : "")}</h2>
        <p>{sectionJSON.map(sec => sec.section === dataSection ? sec.slogan : "")}</p>
        <div className='ul-list'>
          <ul className='ul-list-a'>
            {
              sectionJSON.map(sec => sec.section === dataSection ? sec.details[0].map((detail, index) => <li key={index}><h3>{detail[0]}</h3><p>{detail[1]}</p></li>) : "")
            }
          </ul>
          <ul className='ul-list-b'>
            {
              sectionJSON.map(sec => sec.section === dataSection ? sec.details[1].map((detail, index) => <li key={index}><h3>{detail[0]}</h3><p>{detail[1]}</p></li>) : "")
            }
          </ul>
        </div>
      </div>
      <picture>
        {sectionJSON.map(sec => sec.section === dataSection ? <img key={sec.img} className='img' src={sec.img} alt='papa' /> : "")}
      </picture>
    </section>
  )
}
/*
IDEA CON CHAT GPT
import React from 'react';
import sistemasVRV from './sistemasVRV.json';

function SistemasVRV() {
  return (
    <div>
      <h2>{sistemasVRV.title}</h2>
      <p>{sistemasVRV.slogan}</p>
      <img src={sistemasVRV.img} alt="Sistemas VRV" />
      {sistemasVRV.details.map((detail, index) => (
        <div key={index}>
          <h3>Grupo {index + 1}</h3>
          <ul>
            {detail.map((system) => (
              <li key={system[0]}><strong>{system[0]}</strong>: {system[1]}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SistemasVRV;

*/


export default Bodyappsection2;