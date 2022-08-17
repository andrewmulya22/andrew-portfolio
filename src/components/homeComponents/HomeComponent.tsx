import { Overlay, createStyles, useMantineTheme, Group } from "@mantine/core";
import ProfilePicture from "./ProfilePicture";
import ProfileIntro from "./ProfileIntro";

export function HomeComponent() {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <div
      className={classes.wrapper}
      style={{
        backgroundImage:
          theme.colorScheme === "dark"
            ? "url(images/shirakawago.jpeg)"
            : "url(images/gili.jpeg)",
      }}
      id="home"
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Group position="apart">
        <ProfilePicture />
        <ProfileIntro />
      </Group>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: "90vh",
    position: "relative",
    paddingTop: 100,
    paddingBottom: 130,
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },
}));
