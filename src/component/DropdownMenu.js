import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FiMenu } from "react-icons/fi";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

function DropdownMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FiMenu color="primary" size="2em" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Product</MenuItem>
        <MenuItem onClick={handleClose}>Service</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
      </Menu>
    </div>
  );
}

export default DropdownMenu;
