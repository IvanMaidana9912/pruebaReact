import sectionJSON from "./json/bodySectionsData.json"

const Bodyappsection = ({dataSection}) => {
    return (
        <section className='section-inverter'>
            <picture>
                {sectionJSON.map(sec => sec.section === dataSection ? <img className='img' src={sec.img} alt='papa' /> : "")}
            </picture>
            <div className='div-inverter'>
                <h5>{sectionJSON.map(sec => sec.section === dataSection ? sec.concept : "")}</h5>
                <h2>{sectionJSON.map(sec => sec.section === dataSection ? sec.title : "")}</h2>
                <p>{sectionJSON.map(sec => sec.section === dataSection ? sec.slogan : "")}</p>
                <div className='ul-list'>
                    <div className='ul-list-a'>
                        <ul>
                            {
                                sectionJSON.map(sec => sec.section === dataSection ? sec.details[0].map(detail => <li>{detail}</li>) : "")
                            }
                        </ul>
                    </div>
                    <div className='ul-list-b'>
                        <ul>
                            {
                                sectionJSON.map(sec => sec.section === dataSection ? sec.details[1].map(detail => <li>{detail}</li>) : "")
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bodyappsection;