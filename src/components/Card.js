import { useState } from "react";

const Imgcard = ({detail, over, start, index, end}) => {    
    return(
        <div className="card" draggable onDragEnd={end} onDragStart={() => {start(index)}} onDragOver={(e) => over(index)}>
            {/* image */}
            <div className="img-container">
                
                <img src={detail.img} alt={detail.title}/>
                <div className="overlay"></div>
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