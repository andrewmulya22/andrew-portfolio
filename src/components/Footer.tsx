import {
  createStyles,
  Text,
  ThemeIcon,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { IconBrandReact, IconBrandMantine } from "@tabler/icons";

export default function Footer() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <Group className={classes.footerStyle} spacing="xs" position="right">
      <Text>Made with</Text>
      <ThemeIcon
        variant="outline"
        size="sm"
        color={theme.colorScheme === "dark" ? "red" : "dark"}
      >
        <IconBrandReact />
      </ThemeIcon>
      <Text>ReactJS and</Text>
      <ThemeIcon
        variant="outline"
        size="sm"
        color={theme.colorScheme === "dark" ? "red" : "dark"}
      >
        <IconBrandMantine />
      </ThemeIcon>
      <Text>Mantine UI</Text>
    </Group>
  );
}

const useStyles = createStyles(() => ({
  footerStyle: {
    textAlign: "right",
    marginRight: "3rem",
  },
}));
