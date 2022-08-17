import {
  Group,
  Button,
  useMantineColorScheme,
  createStyles,
  Burger,
  Transition,
  Paper,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function ButtonGroup() {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group className={classes.buttonGroup}>
        <Button
          variant="subtle"
          color={dark ? "gray.0" : "blue"}
          component="a"
          href="#home"
        >
          Home
        </Button>
        <Button
          variant="subtle"
          color={dark ? "gray.0" : "blue"}
          component="a"
          href="#educations"
        >
          Educations
        </Button>
        <Button
          variant="subtle"
          color={dark ? "gray.0" : "blue"}
          component="a"
          href="#experiences"
        >
          Experiences
        </Button>
        <Button
          variant="subtle"
          color={dark ? "gray.0" : "blue"}
          component="a"
          href="#skills"
        >
          Skills
        </Button>
      </Group>
      <Burger
        opened={opened}
        className={classes.burgerStyle}
        color="#228BE6"
        size="sm"
        onClick={toggle}
      ></Burger>
      <Transition transition="pop-top-right" duration={200} mounted={opened}>
        {(styles) => (
          <Paper className={classes.dropdown} withBorder style={styles}>
            <a href="#home" className={classes.link}>
              Home
            </a>
            <a href="#educations" className={classes.link}>
              Educations
            </a>
            <a href="#experiences" className={classes.link}>
              Experiences
            </a>
            <a href="#skills" className={classes.link}>
              Skills
            </a>
          </Paper>
        )}
      </Transition>
    </>
  );
}

const useStyles = createStyles((theme) => ({
  buttonGroup: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  burgerStyle: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  dropdown: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
}));
