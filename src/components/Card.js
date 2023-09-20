const Imgcard = () => {
    return(
        <div className="card" draggable="true">
            {/* image */}
            <div className="img-container">
                <img src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="image-one"/>
            </div>
            {/* text */}
            <div className="about-img">
                <h3 className="img-name">Dan Farrel Art</h3>
                <small className="tag">Art, Culture</small>
                <small className="date-added">Wednesday, 20 September 2023</small>
            </div>
        </div>
    )
}

export default Imgcard;