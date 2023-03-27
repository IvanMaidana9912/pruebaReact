import sectionJSON from "./json/bodySectionsData.json"

const Bodyappsection2 = ({dataSection}) => {

    return (
        <section className='section-vrv'>
            <div className='div-vrv'>
                <h5>{sectionJSON.map(sec => sec.section === dataSection ? sec.concept : "")}</h5>
                <h2>{sectionJSON.map(sec => sec.section === dataSection ? sec.title : "")}</h2>
                <p>{sectionJSON.map(sec => sec.section === dataSection ? sec.slogan : "")}</p>
                <div className='ul-list'>
                    <ul className='ul-list-a'>
                        {
                            sectionJSON.map(sec => sec.section === dataSection ? sec.details[0].map(detail => <li><h3>{detail[0]}</h3><p>{detail[1]}</p></li>) : "")
                        }
                    </ul>
                    <ul className='ul-list-b'>
                        {
                            sectionJSON.map(sec => sec.section === dataSection ? sec.details[1].map(detail => <li><h3>{detail[0]}</h3><p>{detail[1]}</p></li>) : "")
                        }
                    </ul>
                </div>
            </div>
            <picture>
                {sectionJSON.map(sec => sec.section === dataSection ? <img className='img' src={sec.img} alt='papa' /> : "")}
            </picture>
        </section>
    )
}

export default Bodyappsection2;