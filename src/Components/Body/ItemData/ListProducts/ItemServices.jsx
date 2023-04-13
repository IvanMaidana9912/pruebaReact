export const ItemServices = ({ send }) => {
    return (
        <div>

            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        {send.img ? <img src={send.img} key={send.img} className="img-fluid" alt={send.title} /> : ""}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            {send.title ? <h5 key={send.title}>{send.title}</h5> : ""}
                            {send.detail ? <p key={send.detail}>{send.detail}</p> : ""}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}