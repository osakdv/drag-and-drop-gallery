import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Popup = ({ getImgDetails }) => {
  const [imgName, setImgName] = useState("");
  const [imgTags, setImgTags] = useState([]);
  const [isTagSelected, setIsTagSelected] = useState(false);

  const handleTagEntry = (e) => {
    const tagValue = e.target.value;
    if (imgTags.length >= 3 || imgTags.includes(tagValue)) {
      e.target.value = "";
      return;
    }
    setImgTags([...imgTags, tagValue].reverse());
    e.target.value = "";
  };

  useEffect(() => {
    if (imgTags) {
      setIsTagSelected(true);
    }
  }, [imgTags]);

//   Get name field value
const getImgName = (e) => {
    setImgName(e.target.value.trim())
}
  
  const removeTag = () => {};

  return (
    <div className="popup-bg">
      <div className="popup-add-image-content">
        {/* img-container */}
        <div className="cancel-btn">
          <FontAwesomeIcon icon={faXmark} />
        </div>

        <h2>Enter details</h2>

        {/* input-feid */}
        <div className="pop-up-inputs">
          <div className="image-name-input">
            <label htmlFor="img-name">Name image</label>
            <input
              type="text"
              name="image-title"
              id="image-title"
              onChange={(e) => getImgName(e)}
            />
          </div>

          {/* select */}
          <div className="select-tag-container">
            <label>Select tag(s)</label>
            <input
              type="text"
              list="tags"
              onChange={(e) => handleTagEntry(e)}
            />
            <datalist id="tags">
              <option value="Culture" />
              <option value="Street Art" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>

            <div className="tags-selected">
              {isTagSelected &&
                imgTags.map((tag, index) => {
                  return (
                    <small key={index}>
                      {tag}
                      <span>
                        <FontAwesomeIcon icon={faXmark} onClick={removeTag} />
                      </span>
                    </small>
                  );
                })}
            </div>
          </div>

          <button onClick={() => getImgDetails(imgName, imgTags)}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
