import { createStyles } from "@mantine/core";
import React from "react";

export default function ProfilePicture() {
  const { classes } = useStyles();
  return <div className={classes.profilePic}>Test</div>;
}

const useStyles = createStyles((theme) => ({
  profilePic: {
    background: "red",
    minHeight: "65vh",
    marginLeft: "10vh",
    maxWidth: "80vh",
    // "@media (max-width: 1300px)": {
    //   width: "50vh",
    // },
    // "@media (max-width: 1050px)": {
    //   width: "30vh",
    // },
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
}));
