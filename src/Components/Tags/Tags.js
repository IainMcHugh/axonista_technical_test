import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./Tags.scss";

const Tags = (props) => {
  const [hover, setHover] = useState(false);
  const clickHandler = () => {
    console.log("Handle Click");
    props.close(props.index);
  };

  return (
    <div className="tag-container" id={hover ? "tag-hover": ""}>
      <h5>{props.data}</h5>
      <CloseIcon
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={clickHandler}
        fontSize="small"
      />
    </div>
  );
};

export default Tags;
