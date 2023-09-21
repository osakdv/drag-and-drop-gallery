import { useRef } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Imgcard from "./components/Card";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import "./Styles/Home.css";

const Home = () => {
  const imgsDisplayArea = useRef();

  let newImgTitle;
  const [imgSrc, setImgSrc] = useState();
  let newImgTags = [];

  const [imgDetailPopup, setImgDetailPopup] = useState(false);
  const [allImgDetails, setAllImgDetails] = useState([]);
  const [existingItemD, setExistingItemD] = useState(false);
  const [indexDrag, setIndexDrag] = useState();

  const newImgDetails = (imgUrl, title, tags) => {
    return {
      img: imgUrl,
      title: title,
      tags: tags,
    };
  };

  const handleFileInputChange = () => {
    const inputElement = document.getElementById("add-img");
    Array.from(inputElement.files).forEach((file) => {
      fileHandler(file, file.name, file.type);
    });
  };

  const enterImgDetails = (title, tags) => {
    if (!title) {
      const errorMsg = "Please give img a name";
      return errorMsg;
    }

    if (!tags) {
      tags = ["General"];
    }

    newImgTitle = title;
    newImgTags = tags;
    const newImg = newImgDetails(imgSrc, newImgTitle, newImgTags);
    setAllImgDetails([...allImgDetails, newImg]);
    setImgDetailPopup(false);
  };

  const fileHandler = (file, name, type) => {
    if (type.split("/")[0] !== "image") {
      return false;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgDetailPopup(true);
      setImgSrc(reader.result);
    };
  };

  let overItemIndex;
  let startItemIndex

  const overValue = (valu) => {
    overItemIndex = valu
    return overItemIndex;
  };

  const startValue = (valu) => {
    startItemIndex = valu
    return startItemIndex;
  };

  const handleSorting = () => {     
    const _allImgDetails = [...allImgDetails]
    const draggedItem = _allImgDetails.splice(startItemIndex, 1)[0]
    _allImgDetails.splice(overItemIndex, 0, draggedItem)

    overItemIndex = ''
    startItemIndex = ''

    setAllImgDetails(_allImgDetails)
  };

  const dragEnd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleSorting()
  };

  const dragEnterImg = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("card-container-active");
    console.log("enter");
  };

  const dragLeaveImg = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("card-container-active");
  };

  const dragOverImg = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("card-container-active");
  };

  const dropImg = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("card-container-active");
    const draggedData = e.dataTransfer;
    const files = draggedData.files;
    Array.from(files).forEach((file) => {
      fileHandler(file, file.name, file.type);
    });
  };

  const getDraggedElement = (isDragged, index) => {
    setExistingItemD(isDragged);
    setIndexDrag(index);
  };

  return (
    <div className="home-page">
      {/* Add image details popup */}
      {imgDetailPopup && <Popup getImgDetails={enterImgDetails} />}

      {/* nav */}
      <Navbar />
      {/* marquee */}
      {/* img content */}
      <div className="home-content">
        <div className="add-img-container">
          <div className="add-img">
            <input
              type="file"
              name="add-img"
              id="add-img"
              onChange={handleFileInputChange}
            />
            <label className="add-img-label" htmlFor="add-img">
              <FontAwesomeIcon className="add-icon" icon={faPlus} />
            </label>
          </div>
          <small className="message">Click or drag and drop to add image</small>
        </div>

        <div
          className="card-container"
          ref={imgsDisplayArea}
          onDragOver={(e) => {
            dragOverImg(e);
          }}
          onDragEnter={(e) => {
            dragEnterImg(e);
          }}
          onDragLeave={(e) => {
            dragLeaveImg(e);
          }}
          onDrop={(e) => {
            dropImg(e);
          }}
        >
          {allImgDetails &&
            allImgDetails.map((detail, index) => {
              return (
                <div key={index}>
                  {
                    <Imgcard
                      detail={detail}
                      over={overValue}
                      start={startValue}
                      end={dragEnd}
                      index={index}
                    />
                  }
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
