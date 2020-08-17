import React, {useState} from "react";
import logo from "../../images/branding@2x.png";
// import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

import "./Header.scss";

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const clickHandler = (event) => {
    console.log("Handle Click");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    console.log("Handle Close");
    console.log(event.currentTarget.innerText.toLowerCase());
    if(event.currentTarget.innerText.toLowerCase() === "celsius"){
      props.unit(true)
    } else {
      props.unit(false);
    }
    setAnchorEl(null);
  }

  return (
    <div id="nav-wrapper">
      <div id="nav-wrapper_img">
        <img src={logo} alt="Ediflo" />
      </div>
      <div id="nav-wrapper_menu">
        <Button aria-controls="fade-menu" onClick={clickHandler} >
          <MoreVertIcon />
        </Button>
        <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Celsius</MenuItem>
          <MenuItem onClick={handleClose}>Fahrenheit</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
