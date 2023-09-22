const SecondaryGallery = (props) => {
    const { img, title } = props.details;

    return (
        <div className="card col-lg-1">
            <img src={img}></img>
            <p>{title}</p>
        </div>
    );
};

export default SecondaryGallery;