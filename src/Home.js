import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Imgcard from "./components/Card";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import './Styles/Home.css'

const Home = () => {
    let newImgTitle;
    const [imgSrc, setImgSrc] = useState();
    let newImgTags = []

    const [imgDetailPopup, setImgDetailPopup] = useState(false)
    const [allImgDetails, setAllImgDetails] = useState([])
    
    const newImgDetails = (imgUrl, title, tags) => {
        return {
            img: imgUrl, 
            title: title,
            tags: tags
        } 
    }

    const handleFileInputChange = () => {
        const inputElement = document.getElementById("add-img");
        Array.from(inputElement.files).forEach((file) => {
          fileHandler(file, file.name, file.type);
        });
      };


    const enterImgDetails = (title, tags) => {
        if(!title) {
            const errorMsg = "Please give img a name"
            return errorMsg;
        }

        if(!tags) {
            tags = ["General"]
        }

        newImgTitle = title
        newImgTags = tags
        const newImg = newImgDetails(imgSrc, newImgTitle, newImgTags)
        setAllImgDetails([...allImgDetails, newImg])
        console.log(allImgDetails)
        setImgDetailPopup(false)
    }
    
    const fileHandler = (file, name, type) => {
        if(type.split("/")[0] !== "image") {
            return false
        }

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImgDetailPopup(true)
            setImgSrc(reader.result)
        }
    }
    return(
        <div className="home-page">
            {/* Add image details popup */}
            {
                imgDetailPopup && <Popup getImgDetails = {enterImgDetails}/>
            }
            
            {/* nav */}
            <Navbar />
            {/* marquee */}
            {/* img content */}
            <div className="home-content">
                <div className="add-img-container">
                    <div className="add-img">
                        <input type="file" name="add-img" id="add-img" onChange={handleFileInputChange} />
                        <label className="add-img-label" htmlFor="add-img" >
                            <FontAwesomeIcon className="add-icon" icon={faPlus} />
                        </label>
                    </div>
                    <small className="message">
                        Click or drag and drop to add image
                    </small>
                </div>

                <div className="card-container">
                    {
                        allImgDetails && allImgDetails.map((detail, index) => {
                            return <div key={index}>
                                {<Imgcard detail={detail}/>}
                            </div>
                        })
                    }
                    {/* <Imgcard />
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
                    <Imgcard /> */}
                </div>
            </div>
        </div>
    )
}

export default Home;