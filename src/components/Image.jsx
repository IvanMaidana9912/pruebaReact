const Images = ({ itemImg }) => {

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <div>
                    {
                        itemImg.img[1] ? <img key={itemImg.img} className="img-fluid rounded-start" src={itemImg.img[1]} alt={itemImg.titulo} /> : ""
                    }
                </div>
                <div className="col-md-4 d-flex w-100 ">
                    {
                        itemImg.subImg ? itemImg.subImg.map(img => <img key={img} className="img-fluid rounded-start" src={img} alt={"image"} />) : ""
                    }
                </div>
            </div>
        </div>
    )
};

export default Images;