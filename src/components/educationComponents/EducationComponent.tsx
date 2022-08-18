import { createStyles, useMantineTheme, Grid } from "@mantine/core";
import { useState } from "react";
import EducationDetails from "./EducationDetails";
import EducationHistory from "./EducationHistory";
import InstituteDetails from "./InstituteDetails";

export function EducationComponent() {
  const [activeHistory, setActiveHistory] = useState(0);
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const changeEducationDetails = (id: number) => {
    setActiveHistory(id);
  };

  return (
    <div id="educations">
      <Grid
        className={classes.wrapper}
        style={{
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.indigo[0],
        }}
      >
        <Grid.Col span={3} className={classes.educationDivStyle}>
          <EducationHistory educationHandler={changeEducationDetails} />
        </Grid.Col>
        <Grid.Col span={5} className={classes.educationDivStyle}>
          <EducationDetails active={activeHistory} />
        </Grid.Col>
        <Grid.Col
          span={4}
          className={`${classes.educationDivStyle} ${classes.instituteDetailStyle}`}
        >
          <InstituteDetails active={activeHistory} />
        </Grid.Col>
      </Grid>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "90vh",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 1200px)": {
      height: "120vh",
    },
  },

  educationDivStyle: {
    display: "flex",
    borderRight:
      theme.colorScheme === "dark"
        ? "3px solid rgba(255,255,255,0.6)"
        : "3px solid rgba(128,128,128,0.3)",
    marginTop: "3vh",
    marginBottom: "3vh",
    "@media (max-width: 800px)": {
      margin: 0,
      border: 0,
    },
  },

  instituteDetailStyle: {
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
}));
