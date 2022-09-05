import { createStyles, useMantineTheme, Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import EducationDetails from "./EducationDetails";
import EducationHistory from "./EducationHistory";
import InstituteDetails from "./InstituteDetails";
import { useInView } from "react-intersection-observer";

export function EducationComponent() {
  const [activeHistory, setActiveHistory] = useState(0);
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const matches = useMediaQuery("(max-width: 1200px)");
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const changeEducationDetails = (id: number) => {
    setActiveHistory(id);
  };

  return (
    <div id="educations" ref={ref}>
      <Grid
        className={[classes.wrapper, `${inView ? "showClass" : ""}`].join(" ")}
        style={{
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.indigo[0],
        }}
      >
        <Grid.Col span={matches ? 4 : 3} className={classes.educationDivStyle}>
          <EducationHistory educationHandler={changeEducationDetails} />
        </Grid.Col>
        <Grid.Col span={matches ? 8 : 5} className={classes.educationDivStyle}>
          <EducationDetails active={activeHistory} />
        </Grid.Col>
        <Grid.Col
          span={4}
          className={classes.educationDivStyle}
          style={{ display: matches ? "none" : "flex" }}
        >
          <InstituteDetails active={activeHistory} />
        </Grid.Col>
      </Grid>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "90vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    "@media (max-width: 550px)": {
      display: "inline-block",
      padding: "5em 0em",
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
    "@media (max-width: 1100px)": {
      margin: 0,
      border: 0,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  instituteDetailStyle: {
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
}));
