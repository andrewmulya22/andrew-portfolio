import {
  createStyles,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import educations from "../../webData/educations";

export default function InstituteDetails({ active }: { active: number }) {
  const theme = useMantineTheme();
  const educationData = educations[active];
  const { classes } = useStyles();
  return (
    <Stack className={classes.stackStyle}>
      <Title order={1} className={classes.textTitle} align="center">
        {educationData.institution}
      </Title>
      <Text align="center">{educationData.address}</Text>
      <Text align="center" weight="bold">
        {educationData.contact}
      </Text>
      <Text align="justify">{educationData.description}</Text>
    </Stack>
  );
}

const useStyles = createStyles((theme) => ({
  stackStyle: {
    alignItems: "stretch",
    flex: 1,
    justifyContent: "center",
    padding: "0vh 3vh 15vh 3vh",
  },
  textTitle: {
    marginTop: "5vh",
    color: theme.colorScheme === "dark" ? "red" : "#3B5BDB",
  },
}));
