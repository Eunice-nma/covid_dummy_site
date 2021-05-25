import { Typography } from "@material-ui/core";
import React from "react";
import image from "../fightImage.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    maxHeight: "600px",
    maxWidth: "50%",
    flex: "3",
    margin: "2%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
    },
  },
  bodyStyle: {
    paddingTop: "7%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  buttonStyle: {
    padding: "15px 35px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#02A6A7",
    color: "white",
    margin: "20px",
    fontSize: "20px",
    margin: "0 auto",
    display: "table",
  },
  bottomMargin: {
    marginBottom: "10px",
  },
}));

function LandingPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.bodyStyle}>
      <div className={classes.TextStyle}>
        <h2>FIGHT</h2>
        <h3 className={classes.bottomMargin}>Coronavirus</h3>
        <p className={classes.bottomMargin}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, <br />
          temporibus autem. Ea at explicabo consectetur ducimus rerum, eveniet
          <br />
          facere amet eligendi eos in modi excepturi quidem quas consequatur.
          <br />
          Facere, ducimus?
        </p>
        <button className={classes.buttonStyle}>Learn more</button>
      </div>

      <img src={image} className={classes.imageStyle} />
    </div>
  );
}

export default LandingPage;
