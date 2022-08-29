import { useState } from "react";
import {
  Timeline,
  Text,
  Stack,
  createStyles,
  useMantineTheme,
} from "@mantine/core";

export default function EducationHistory({
  educationHandler,
}: {
  educationHandler: (id: number) => void;
}) {
  const [active, setActive] = useState(0);
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <Stack justify="center" className={classes.stackStyle}>
      <Timeline
        radius="lg"
        active={active}
        lineWidth={2}
        bulletSize={30}
        align="right"
        color={theme.colorScheme === "dark" ? "red" : "indigo"}
      >
        <Timeline.Item
          title="Undergraduate"
          onClick={() => {
            setActive(0);
            educationHandler(0);
          }}
          className={classes.textTitle}
        >
          <Text size="lg" className={classes.textDesc}>
            Universitas Gadjah Mada
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Senior High School"
          onClick={() => {
            setActive(1);
            educationHandler(1);
          }}
          className={classes.textTitle}
        >
          <Text size="lg" className={classes.textDesc}>
            SMA Kolese De Britto Yogyakarta
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Junior High School"
          onClick={() => {
            setActive(2);
            educationHandler(2);
          }}
          className={classes.textTitle}
        >
          <Text size="lg" className={classes.textDesc}>
            SMP Pangudi Luhur 1 Yogyakarta
          </Text>
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  stackStyle: {
    paddingLeft: "3em",
    textAlign: "center",
  },
  textTitle: {
    fontSize: "25px",
    color: theme.colorScheme === "dark" ? "red" : "blue",
    cursor: "pointer",
    paddingBottom: "5em",
  },
  textDesc: {
    color: theme.colorScheme === "dark" ? "white" : "#868E96",
  },
}));
