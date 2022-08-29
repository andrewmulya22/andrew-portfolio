import {
  Avatar,
  createStyles,
  Text,
  Timeline,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";

export default function ExperienceHistory({
  experienceHandler,
}: {
  experienceHandler: (id: number) => void;
}) {
  const [active, setActive] = useState(0);
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Stack className={classes.stackStyle}>
      <Timeline
        active={3}
        lineWidth={3}
        bulletSize={50}
        color={theme.colorScheme === "dark" ? "red" : "blue"}
      >
        <Timeline.Item
          title="Software Developer"
          className={classes.textTitle}
          onClick={() => {
            experienceHandler(0);
          }}
          bullet={
            <Avatar
              size={50}
              radius="lg"
              color={theme.colorScheme === "dark" ? "red" : "violet"}
              // src="https://pbs.twimg.com/profile_images/519024135129665537/phJvJ6Da_400x400.png"
            >
              MN
            </Avatar>
          }
        >
          <Text color="dimmed" size="md" className={classes.textDesc}>
            Mirai Communication Network (June 2022 - Now)
          </Text>
        </Timeline.Item>
        <Timeline.Item
          className={classes.textTitle}
          title="Cyber Security Staff"
          onClick={() => {
            experienceHandler(1);
          }}
          bullet={
            <Avatar
              size={50}
              radius="lg"
              color={theme.colorScheme === "dark" ? "red" : "violet"}
              // src="https://www.bcalife.co.id/storage/managements/bca-1521792190.png"
            >
              BCA
            </Avatar>
          }
        >
          <Text color="dimmed" size="md" className={classes.textDesc}>
            Bank Central Asia (Nov 2021 - May 2022)
          </Text>
        </Timeline.Item>
        <Timeline.Item
          className={classes.textTitle}
          title="Backend Programmer (Intern)"
          onClick={() => {
            experienceHandler(2);
          }}
          bullet={
            <Avatar
              size={50}
              radius="lg"
              color={theme.colorScheme === "dark" ? "red" : "violet"}
              // src="/images/LIT.jpg"
            >
              LIT
            </Avatar>
          }
        >
          <Text color="dimmed" size="md" className={classes.textDesc}>
            Lunar Inovasi Technology (June - October 2021)
          </Text>
        </Timeline.Item>
        <Timeline.Item
          className={classes.textTitle}
          title="Backend Programmer (Intern)"
          onClick={() => {
            experienceHandler(3);
          }}
          bullet={
            <Avatar
              size={50}
              radius="lg"
              color={theme.colorScheme === "dark" ? "red" : "violet"}
              // src="/images/angkasapura.jpg"
            >
              AP
            </Avatar>
          }
        >
          <Text color="dimmed" size="md" className={classes.textDesc}>
            Angkasa Pura (January - March 2020)
          </Text>
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  stackStyle: {
    flex: 1,
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: "25px",
    color: theme.colorScheme === "dark" ? "red" : "blue",
    cursor: "pointer",
    paddingBottom: "5vh",
    paddingLeft: "4vh",
  },
  textDesc: {
    color: theme.colorScheme === "dark" ? "white" : "#868E96",
  },
}));
