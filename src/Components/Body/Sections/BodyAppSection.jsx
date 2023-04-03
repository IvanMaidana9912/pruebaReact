import sectionJSON from "../../../BBDD/bodySectionsData.json";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const BodyAppSection = ({ dataSection }) => {
  return (
    <>
    <div className="container" style={{margin: 'auto', maxWidth: '1200px'}}>
      <Card className="mb-5 border-0" style={{margin: 'auto', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}} >
        <div className="d-flex justify-content-center">
          {sectionJSON.map(sec => sec.section === dataSection ? <Card.Img key={sec.img} className='img w-75' src={sec.img} alt={sec.concept} /> : "")}
        </div>
        <div>
        <Card.Body style={{width: '318px', margin: 'auto'}}>
          <Card.Subtitle style={{color: 'blue'}}>
            {sectionJSON.map(sec => sec.section === dataSection ? sec.concept : "")}
          </Card.Subtitle>
          <Card.Title className="d-flex text-center">
            {sectionJSON.map(sec => sec.section === dataSection ? sec.title : "")}
          </Card.Title>
          <Card.Text>
            {sectionJSON.map(sec => sec.section === dataSection ? sec.slogan : "")}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush list-group-section">
          <div className="d-flex justify-content-center">
            <ListGroup.Item className="border-0">
              {sectionJSON.map(sec => sec.section === dataSection ? sec.details[0].map((detail, index) => <li key={index}>{detail}</li>) : "")}
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
              {sectionJSON.map(sec => sec.section === dataSection ? sec.details[1].map((detail, index) => <li key={index}>{detail}</li>) : "")}
            </ListGroup.Item>
          </div>
        </ListGroup>
        </div>
        {/* <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body> */}
      </Card>
      </div>
    </>
  )
}
