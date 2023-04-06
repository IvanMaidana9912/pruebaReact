export const Services = ({ items }) => {

    const [aver] = items;
    console.log(aver.category);
    return (
        <div className="row my-5">
            <div className="col-md-4 offset-md-3 text-center">
                {items.map(item => item.img ? <img src={item.img} key={item.img} className="img-fluid" alt={item.title} /> : "")}
                {items.map(item => item.title ? <h3 key={item.title}>{item.title}</h3> : "")}
                {items.map(item => item.detail ? <p key={item.detail}>{item.detail}</p> : "")}
            </div>
        </div>
    )
}