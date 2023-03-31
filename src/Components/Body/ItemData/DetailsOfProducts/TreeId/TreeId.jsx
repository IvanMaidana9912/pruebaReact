
export const TreeId = ({ identification }) => {

    return (
        <div className="card mb-3 p-xl-5 bg-dark" id="cardsSecundaries">
            <div className="row g-0">
                <div className="col-md-4">
                    {
                        identification.img ? <img src={identification.img[0]} className="img-fluid rounded-start" alt={identification.title} /> : ""
                    }
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        {
                            identification.title ? <h5 className="card-title">{identification.title}</h5> : ""
                        }
                        {
                            identification.slogan ? <p className="card-text">{identification.slogan}</p> : ""
                        }

                        <ul>
                            {
                                identification.details ? identification.details.map((item, index) =>
                                    <li className="text-start" key={index}>{item}</li>) : ""
                            }
                        </ul>
                        <div className="d-flex justify-content-center">
                            {
                                identification.catalog ? <button onClick={() => { window.open(identification.catalog, '_blank') }} className="btn btn-info mt-5">Download Catalog</button> : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

