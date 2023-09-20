import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Imgcard from "./components/Card";
import './Styles/Home.css'

const Home = () => {
    const allImages = []
    
    const callImgCard = (imgUrl, title, tags) => {
        return <Imgcard img={imgUrl} title={title} tags={tags}/>
    }

    const enterImgDetails = () => {
        
    }
    
    const fileHandler = (file, name, type) => {
        console.log("clicking")
        if(type.split("/")[0] !== "image") {
            return false
        }

        const reader = new FileReader()
        reader.readAsDataURL()
        reader.onloadend = () => {
            // call the popup
            // push the call img
            const imgCard = callImgCard()
            allImages.push(imgCard)
        }
    }
    return(
        <div className="home-page">
            {/* nav */}
            {/* marquee */}
            {/* img content */}
            <div className="home-content">
                <div className="add-img-container">
                    <div className="add-img">
                        <input type="file" name="add-img" id="add-img" />
                        <label className="add-img-label" htmlFor="add-img" onClick={fileHandler}>
                            <FontAwesomeIcon className="add-icon" icon={faPlus} />
                        </label>
                    </div>
                    <small className="message">
                        Click or drag and drop to add image
                    </small>
                </div>

                <div className="card-container">
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                    <Imgcard />
                </div>
            </div>
        </div>
    )
}

export default Home;