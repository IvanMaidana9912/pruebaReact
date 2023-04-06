export const ItemServices = ({ send }) => {
    return (
        <div>
            {send.img ? <img src={send.img} key={send.img} className="img-fluid" alt={send.title} /> : ""}
            <div>
                {send.title ? <h3 key={send.title}>{send.title}</h3> : ""}
                {send.detail ? <p key={send.detail}>{send.detail}</p> : ""}
            </div>
        </div>
    )
}