import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import DropdownMenu from "./DropdownMenu";
import MediaQuery, { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    fontStyle: "italic",
  },
}));

function Nav(props) {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <h3>Covid19</h3>
      </div>
      <div>
        <MediaQuery query="(min-width: 901px)">
          <button>Home</button>
          <button>Product</button>
          <button>Services</button>
          <button>About</button>
        </MediaQuery>

        <MediaQuery query="(max-width: 900px)">
          <DropdownMenu></DropdownMenu>
        </MediaQuery>
      </div>
    </div>
  );
}

export default Nav;
