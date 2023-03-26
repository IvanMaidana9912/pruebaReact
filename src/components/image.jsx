const Images = ({ itemImg }) => {
    
    return (
        <div>
            {itemImg.img && itemImg.img.map((image) => {
                return <img key={image} src={image} width={200} alt={itemImg.titulo} />
            })}
        </div>
    )
};

export default Images;