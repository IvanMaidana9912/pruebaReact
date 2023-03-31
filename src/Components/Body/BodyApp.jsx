import '../../Css/index.css'
import { Carrousel } from './Carrousel/Carrousel';
import { BodyAppSection } from './Sections/BodyAppSection';
import { BodyAppSection2 } from './Sections/BodyAppSection2';

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