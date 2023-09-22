import { useRef } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Imgcard from "./components/Card";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import "./Styles/Home.css";
import Signin from "./components/Signin";
import img1 from "./imgs/1.png";
import img2 from "./imgs/2.png";
import img3 from "./imgs/3.png";
import img4 from "./imgs/4.png";
import img5 from "./imgs/5.png";
import img6 from "./imgs/6.jpeg";
import img7 from "./imgs/7.png";
import Preloader from "./components/Preloader";

const Home = () => {
  const imgsDisplayArea = useRef();

  let newImgTitle;
  const [imgSrc, setImgSrc] = useState();
  let newImgTags = [];

  const [preLoader, setPreloader] = useState(true);
  const [imgDetailPopup, setImgDetailPopup] = useState(false);
  const [originalData, setOriginalData] = useState([
    {
      img: img1,
      title: "Pattern Art",
      tags: ["Culture", "Art"],
    },
    {
      img: img2,
      title: "Women",
      tags: ["Culture", "Art"],
    },
    {
      img: img3,
      title: "Memo",
      tags: ["Book"],
    },
    {
      img: img4,
      title: "Senegal Senegal.",
      tags: ["Book"],
    },
    {
      img: img5,
      title: "Empire Centrafricain",
      tags: ["Art"],
    },
    {
      img: img7,
      title: "Mozambique Rho.",
      tags: ["Book"],
    },
  ]);
  const [allImgDetails, setAllImgDetails] = useState([
    {
      img: img1,
      title: "Pattern Art",
      tags: ["Culture", "Art"],
    },
    {
      img: img2,
      title: "Women",
      tags: ["Culture", "Art"],
    },
    {
      img: img3,
      title: "Memo",
      tags: ["Book"],
    },
    {
      img: img4,
      title: "Senegal Senegal.",
      tags: ["Book"],
    },
    {
      img: img5,
      title: "Empire Centrafricain",
      tags: ["Art"],
    },
    {
      img: img7,
      title: "Mozambique Rho.",
      tags: ["Book"],
    },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inputDisable, setInputDisable] = useState(false);

  const newImgDetails = (imgUrl, title, tags) => {
    return {
      img: imgUrl,
      title: title,
      tags: tags,
    };
  };

  const handleFileInputChange = () => {
    // check if user is loggedin
    if (!isLoggedIn) {
      setIsLoggedIn(false);
      return;
    }

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
    setOriginalData([...originalData, newImg]);
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
  let startItemIndex;

  const overValue = (valu) => {
    overItemIndex = valu;
    return overItemIndex;
  };

  const startValue = (valu) => {
    startItemIndex = valu;
    return startItemIndex;
  };

  const handleSorting = () => {
    const _allImgDetails = [...allImgDetails];
    const draggedItem = _allImgDetails.splice(startItemIndex, 1)[0];
    _allImgDetails.splice(overItemIndex, 0, draggedItem);

    overItemIndex = "";
    startItemIndex = "";

    setAllImgDetails(_allImgDetails);
  };

  const dragEnd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleSorting();
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
      if (!isLoggedIn) {
        setIsLoggedIn(false);
        setInputDisable(true);
        return;
      } else {
        setInputDisable(true);
      }
      fileHandler(file, file.name, file.type);
    });
  };

  const loginHandler = (state) => {
    setIsLoggedIn(state);
  };

  //   navbar filter
  const resetFilter = () => {
    setAllImgDetails(originalData);
    console.log(allImgDetails);
  };

  const filterFunc = (val) => {
    resetFilter();

    let filteredData;
    filteredData = allImgDetails.filter((data) => data.tags.includes(val));
    setAllImgDetails(filteredData);
  };

  const filterByLink = (link) => {
    switch (link) {
      case "All":
        setAllImgDetails([...originalData]);
        break;

      case "Album":
        filterFunc("Album");
        break;

      case "Book":
        filterFunc("Book");
        break;

      case "Art":
        filterFunc("Art");
        break;

      case "Culture":
        filterFunc("Culture");
        break;

      case "Painting":
        filterFunc("Painting");
        break;

      default:
        break;
    }
  };

  //   search function
  const searchField = (val) => {
    console.log(val);
    setAllImgDetails(originalData);
    let filteredSearch = allImgDetails.filter((detail) => detail.title === val || detail.tags.includes(val));
    console.log(filteredSearch)

    if(filteredSearch) setAllImgDetails(filteredSearch);

  };

  // preloader
  setTimeout(() => {
    setPreloader(false)
  }, 3000);

  return (
    <div className="home-page">
      {/* Add image details popup */}
      {imgDetailPopup && <Popup getImgDetails={enterImgDetails} />}
      {/* Signin popup */}
      {isLoggedIn === false ? <Signin loginHandler={loginHandler} /> : null}

      {/* nav */}
      <Navbar handFiltered={filterByLink} search={searchField} signinBtn={loginHandler} loginState={isLoggedIn}/>
      {/* marquee */}
      {/* img content */}
      {}
      <div className="home-content">
        <div className="add-img-container">
          <div className="add-img">
            <input
              type="file"
              name="add-img"
              id="add-img"
              onChange={handleFileInputChange}
              //   disabled={inputDisable}
            />
            <label
              className="add-img-label"
              htmlFor="add-img"
              onClick={() => {
                if (!isLoggedIn) {
                  setIsLoggedIn(false);
                  setInputDisable(true);
                  return;
                } else {
                  setInputDisable(true);
                }
              }}
            >
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
          {preLoader ? <Preloader /> : null}
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
