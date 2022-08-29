import {
  Stack,
  Title,
  Text,
  createStyles,
  List,
  ThemeIcon,
  useMantineTheme,
} from "@mantine/core";
import experiences from "../../webData/experiences";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { useMediaQuery } from "@mantine/hooks";

export default function ExperienceDetails({ active }: { active: number }) {
  const theme = useMantineTheme();
  const experienceData = experiences[active];
  const descriptions = experienceData.jobDescription;
  const { classes } = useStyles();
  const matches = useMediaQuery("(max-width: 750px)");

  return (
    <Stack className={classes.stackStyle}>
      <Title
        order={matches ? 3 : 1}
        className={classes.textTitle}
        align="center"
      >
        Company
      </Title>
      <Text align="center" weight="bold" size={matches ? 15 : 20}>
        {experienceData.companyName}
      </Text>
      <Text align="center" size={matches ? 12 : 15}>
        {experienceData.address}
      </Text>

      <Title
        order={matches ? 3 : 1}
        className={classes.textTitle}
        align="center"
      >
        Job Description
      </Title>
      <Text align="center" weight="bold" size={matches ? 15 : 20}>
        {experienceData.jobTitle}
      </Text>
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
        {descriptions.map((description) => (
          <List.Item key={description}>
            <Text size={matches ? 15 : 20}>{description}</Text>
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
    padding: "0 3em 5em 3em",
  },
  textTitle: {
    marginTop: "5vh",
    color: theme.colorScheme === "dark" ? "red" : "#3B5BDB",
  },
  listStyle: {
    paddingLeft: "5vh",
    paddingTop: "2vh",
    "@media (max-width: 800px)": {
      paddingLeft: "1vh",
    },
  },
  iconStyle: {
    marginTop: "5px",
  },
}));
