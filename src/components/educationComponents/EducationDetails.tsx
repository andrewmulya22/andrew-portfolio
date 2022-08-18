import {
  Stack,
  Title,
  Text,
  createStyles,
  List,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import educations from "../../webData/educations";
import { LightningBoltIcon } from "@radix-ui/react-icons";

export default function EducationDetails({ active }: { active: number }) {
  const theme = useMantineTheme();
  const educationData = educations[active];
  const activities = educationData.activities;
  const { classes } = useStyles();
  return (
    <Stack className={classes.stackStyle}>
      <Title order={1} className={classes.textTitle} align="center">
        Brief Description
      </Title>
      <Text align="center" weight="bold" size={25}>
        {educationData.institution}
      </Text>
      <Text align="center" weight="bold" size={20}>
        {educationData.startDate} - {educationData.endDate}
      </Text>
      {active === 0 ? (
        <Text align="center" size={20}>
          Major - {educationData.major}{" "}
          <Text component="span" weight="bold">
            {" "}
            (GPA : {educationData.finalScore})
          </Text>
        </Text>
      ) : null}

      <Title order={1} className={classes.textTitle} align="center">
        Achievement & Activities
      </Title>
      <List
        spacing="xs"
        size="sm"
        className={classes.listStyle}
        icon={
          <ThemeIcon
            color={theme.colorScheme === "dark" ? "red" : "indigo"}
            size={24}
            radius="xl"
            className={classes.iconStyle}
          >
            <LightningBoltIcon />
          </ThemeIcon>
        }
      >
        {activities.map((activity) => (
          <List.Item key={activity.title}>
            <Text weight="bold" size={20}>
              {activity.title}
            </Text>
            <Text>{activity.description}</Text>
          </List.Item>
        ))}
      </List>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  stackStyle: {
    alignItems: "stretch",
    flex: 1,
    justifyContent: "center",
    padding: "0vh 3vh 15vh 3vh",
    "@media (max-width: 900px)": {
      alignItems: "flex-end",
    },
  },
  textTitle: {
    marginTop: "5vh",
    color: theme.colorScheme === "dark" ? "red" : "#3B5BDB",
  },
  listStyle: {
    paddingLeft: "10vh",
    paddingTop: "2vh",
  },
  iconStyle: {
    marginTop: "5px",
  },
}));
