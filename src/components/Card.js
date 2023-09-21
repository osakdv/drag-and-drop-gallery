const Imgcard = ({detail}) => {

    
    return(
        <div className="card" draggable="true">
            {/* image */}
            <div className="img-container">
                <img src={detail.img} alt={detail.title}/>
            </div>
            {/* text */}
            <div className="about-img">
                <h3 className="img-name">{detail.title}</h3>
                <small className="tag">Art, Culture</small>
                <small className="date-added">Wednesday, 20 September 2023</small>
            </div>
        </div>
    )
}

export default Imgcard;