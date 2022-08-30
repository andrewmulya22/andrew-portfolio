import {
  createStyles,
  useMantineTheme,
  Grid,
  Title,
  ThemeIcon,
  Group,
} from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { BackpackIcon } from "@radix-ui/react-icons";
import { useMediaQuery } from "@mantine/hooks";
import SkillIcon from "./SkillIcon";
import skills from "../../webData/skills";

export default function SkillComponent() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <div
      id="skills"
      ref={ref}
      className={[classes.divWrapper, `${inView ? "showClass" : ""}`].join(" ")}
      style={{
        background:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.indigo[0],
      }}
    >
      <Group position="center" spacing="xs">
        {/* <ThemeIcon
          radius="lg"
          size="xl"
          variant="outline"
          color={theme.colorScheme === "dark" ? "red" : ""}
        >
          <BackpackIcon />
        </ThemeIcon> */}
        <Title order={1} className={classes.titleStyle}>
          Dev Stacks
        </Title>
      </Group>
      <Grid
        className={[classes.wrapper, `${inView ? "showClass" : ""}`].join(" ")}
        style={{
          background:
            theme.colorScheme === "dark"
              ? theme.colors.gray[7]
              : theme.colors.indigo[3],
        }}
        gutter="lg"
        columns={14}
        justify="center"
      >
        {skills.map((skill) => (
          <SkillIcon key={skill.text} url={skill.url} text={skill.text} />
        ))}
      </Grid>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  divWrapper: {
    marginTop: "0.3rem",
    minHeight: "90vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
  },
  titleGroupStyle: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  titleStyle: {
    margin: "5vh",
    color: theme.colorScheme === "dark" ? "red" : "#3B5BDB",
  },
  wrapper: {
    marginTop: "0.3rem",
    maxWidth: "70vh",
    margin: "auto",
    padding: "1vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));
