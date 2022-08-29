import { Button, createStyles, Text, Title } from "@mantine/core";
import { clamp } from "@mantine/hooks";

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
        <Text className={classes.description}>
          Software developer for Mirai Communication Network. <br />
          I'm aiming to improve my capability in <br />
          <Text component="span" weight="bold" inherit>
            Web Development
          </Text>{" "}
          and{" "}
          <Text component="span" weight="bold" inherit>
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
    // background: "blue",
    marginRight: "3em",
    marginLeft: "1em",
    "@media (max-width: 500px)": {
      marginRight: "1em",
    },
  },
  title: {
    fontWeight: 800,
    fontSize: clamp(15, 50, 70),
    letterSpacing: -1,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "right",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  highlight: {
    color:
      theme.colorScheme === "dark"
        ? "red"
        : theme.colors[theme.primaryColor][4],
  },

  descriptionWrapper: {
    alignItems: "center",
  },

  description: {
    fontSize: clamp(10, 20, 30),
    color: theme.colors.gray[0],
    textAlign: "right",
    wordWrap: "break-word",
  },

  controls: {
    marginTop: theme.spacing.xl * 5,
    display: "flex",
    justifyContent: "center",
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,
    color: theme.colorScheme === "dark" ? "red" : "#3B5BDB",
  },
}));
