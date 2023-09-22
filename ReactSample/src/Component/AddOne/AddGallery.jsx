const AddGallery = (props) => {
    const { img, title, cost } = props.details;

    return (
        <div className="cards col-lg-2">
            <img src={img}></img>
            <h5>{title}</h5>
            <h6>{cost}</h6>
        </div>
    );
};

export default AddGallery;