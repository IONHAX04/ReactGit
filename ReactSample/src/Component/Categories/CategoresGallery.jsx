const CategoresGallery = (props) => {
    const { img } = props.details;

    return (
        <div className="card col-lg-2 categ">
            <img src={img}></img>
        </div>
    );
};

export default CategoresGallery;