import {
  Avatar,
  createStyles,
  Grid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useHover } from "@mantine/hooks";

export default function SkillIcon<FC>({
  url,
  text,
}: {
  url: string;
  text: string;
}) {
  const { classes } = useStyles();
  const matches = useMediaQuery("(max-width: 500px)");
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();
  return (
    <Grid.Col
      span={3}
      style={{
        background:
          theme.colorScheme === "dark"
            ? theme.colors.gray[4]
            : theme.colors.indigo[4],
        margin: "0.5rem",
      }}
      className={[classes.gridStyle, hovered ? "hoverClass" : ""].join(" ")}
      ref={ref}
    >
      <Avatar
        size={matches ? "lg" : "xl"}
        radius="lg"
        src={url}
        style={{ margin: "auto" }}
      />
      {matches ? (
        ""
      ) : (
        <Text
          color={theme.colorScheme === "dark" ? "red" : "white"}
          weight={500}
          style={{ paddingTop: "0.3rem" }}
        >
          {text}
        </Text>
      )}
    </Grid.Col>
  );
}

const useStyles = createStyles(() => ({
  gridStyle: {
    cursor: "pointer",
  },
}));
