import { Overlay, createStyles, useMantineTheme, Group } from "@mantine/core";
import ProfilePicture from "./ProfilePicture";
import ProfileIntro from "./ProfileIntro";
import { useInView } from "react-intersection-observer";

export function HomeComponent() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div
      className={[classes.wrapper, `${inView ? "showClass" : ""}`].join(" ")}
      style={{
        backgroundImage:
          theme.colorScheme === "dark"
            ? "url(images/shirakawago.jpeg)"
            : "url(images/gili.jpeg)",
      }}
      id="home"
      ref={ref}
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
    minHeight: "90vh",
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
