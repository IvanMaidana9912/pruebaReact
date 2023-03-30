import '../index.css'
import {Carrousel} from './Carrousel';
import {BodyAppSection} from './BodyAppSection';
import {BodyAppSection2} from './BodyAppSection2';

export const BodyApp = () => {
  return (
    <>
      <div className='d-flex flex-column align-items-center'>
        <Carrousel />
        <BodyAppSection dataSection={"1"} />
        <BodyAppSection2 dataSection={"2"} />
        <BodyAppSection dataSection={"3"} />
      </div>
    </>
  )
}