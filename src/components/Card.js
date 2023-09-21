import { useState } from "react";

const Imgcard = ({detail, over, start, index, end}) => {    
    const timeCreated = new Date()
    
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
                <small className="tag">{
                    detail.tags.length == 1 && `${detail.tags[0]}` || (detail.tags.length == 2  && `${detail.tags[0]}, ${detail.tags[1]}`) || (detail.tags.length == 3  && `${detail.tags[0]}, ${detail.tags[1]}, ${detail.tags[2]}`)
                }</small>
                <small className="date-added">{timeCreated.toUTCString()}</small>
            </div>
        </div>
    )
}

export default Imgcard;