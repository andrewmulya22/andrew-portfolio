import { Button, createStyles, Text, Title } from "@mantine/core";

export default function ProfileIntro() {
  const { classes } = useStyles();
  return (
    <div className={classes.inner}>
      <Title className={classes.title}>
        Hi! I am{" "}
        <Text component="span" inherit className={classes.highlight}>
          Andrew Mulya
        </Text>
      </Title>
      <div className={classes.descriptionWrapper}>
        <Text size="md" className={classes.description}>
          Software developer for Mirai Communication Network. <br />
          I'm aiming to improve my capability in <br />
          <Text component="span" weight="bold">
            Web Development
          </Text>{" "}
          and{" "}
          <Text component="span" weight="bold">
            Cloud Computing.
          </Text>
        </Text>
      </div>

      <div className={classes.controls}>
        <Button className={classes.control} variant="white" size="lg">
          Download CV
        </Button>
      </div>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  inner: {
    position: "relative",
    zIndex: 1,
  },
  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: "10vh",
    paddingRight: "15vh",
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "right",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 700px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colorScheme === "dark"
        ? "red"
        : theme.colors[theme.primaryColor][4],
  },

  descriptionWrapper: {
    alignItems: "center",
    marginLeft: "6vh",
    width: "50vh",
    "@media (max-width: 600px)": {
      width: "auto",
      marginLeft: "auto",
      marginRight: "5vh",
    },
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "right",

    "@media (max-width: 700px)": {
      paddingLeft: "10vh",
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 5,
    display: "flex",
    justifyContent: "flex-end",
    paddingLeft: "10vh",
    paddingRight: "30vh",

    "@media (max-width: 1200px)": {},
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,
    color: theme.colorScheme === "dark" ? "red" : "#3B5BDB",

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 700px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  },
}));
