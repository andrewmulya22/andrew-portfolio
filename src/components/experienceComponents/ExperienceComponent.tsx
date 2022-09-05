import { createStyles, useMantineTheme, Grid } from "@mantine/core";
import ExperienceHistory from "./ExperienceHistory";
import { useState } from "react";
import ExperienceDetails from "./ExperienceDetails";
import { useInView } from "react-intersection-observer";

export function ExperienceComponent() {
  const [activeHistory, setActiveHistory] = useState(0);
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const changeExperienceDetails = (id: number) => {
    setActiveHistory(id);
  };

  return (
    <div id="experiences" ref={ref}>
      <Grid
        className={[classes.wrapper, `${inView ? "showClass" : ""}`].join(" ")}
        style={{
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.indigo[0],
        }}
      >
        <Grid.Col span={6} className={classes.experienceDivStyle}>
          <ExperienceDetails active={activeHistory} />
        </Grid.Col>
        <Grid.Col span={6} className={classes.experienceDivStyle}>
          <ExperienceHistory experienceHandler={changeExperienceDetails} />
        </Grid.Col>
      </Grid>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: "0.3rem",
    minHeight: "90vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    "@media (max-width: 550px)": {
      display: "inline-block",
      padding: "5em 0em",
    },
  },

  experienceDivStyle: {
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
}));
