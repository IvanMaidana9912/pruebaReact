import sectionJSON from "../../../BBDD/bodySectionsData.json"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const BodyAppSection2 = ({ dataSection }) => {
  return (
    <>
      <Card className="mb-5 w-75 border-0">
        <div className="d-flex justify-content-center">
          {sectionJSON.map(sec => sec.section === dataSection ? <Card.Img key={sec[0] + '-' + dataSection} className='img w-75' src={sec.img} alt='papa' /> : "")}
        </div>
        <Card.Body>
          <Card.Subtitle>
            {sectionJSON.map(sec => sec.section === dataSection ? sec.concept : "")}
          </Card.Subtitle>
          <Card.Title>
            {sectionJSON.map(sec => sec.section === dataSection ? sec.title : "")}
          </Card.Title>
          <Card.Text>
            {sectionJSON.map(sec => sec.section === dataSection ? sec.slogan : "")}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <div className="d-flex justify-content-center">
            <ListGroup.Item className="w-50 border-0">
              {sectionJSON.map(sec => sec.section === dataSection ? sec.details[0].map(detail => <ul key={detail[0] + '-' + dataSection}><li><h3>{detail[0]}</h3></li><span>{detail[1]}</span></ul>) : "")}
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
              {sectionJSON.map(sec => sec.section === dataSection ? sec.details[1].map(detail => <ul key={detail[0] + '-' + dataSection}><li><h3>{detail[0]}</h3></li><span>{detail[1]}</span></ul>) : "")}
            </ListGroup.Item>
          </div>
        </ListGroup>
        {/* <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body> */}
      </Card>
    </>
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
