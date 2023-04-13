export const ItemServices = ({ send }) => {
    return (
        <div>
            <div className="card mb-3 d-flex w-75" >
                <div className="d-flex flex-row align-items-center">
                    <div className="col">
                        {send.img ? <img src={send.img} key={send.img} className="img-fluid" alt={send.title} /> : ""}
                    </div>
                    <div className="col">
                        <div className="card-body">
                            {send.title ? <h5 key={send.title}>{send.title}</h5> : ""}
                            {send.detail ? <p className="text-start" key={send.detail}>{send.detail}</p> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}