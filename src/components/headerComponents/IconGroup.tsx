import LightDarkIcon from "../LightDarkIcon";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  ActionIcon,
  createStyles,
  Group,
  useMantineColorScheme,
} from "@mantine/core";

export default function IconGroup() {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Group className={classes.buttonGroup}>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        component="a"
        href="https://www.linkedin.com/in/andrew-mulya/"
        target="_blank"
      >
        <LinkedInLogoIcon />
      </ActionIcon>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        component="a"
        href="https://github.com/andrewmulya22"
        target="_blank"
      >
        <GitHubLogoIcon />
      </ActionIcon>
      <LightDarkIcon />
    </Group>
  );
}

const useStyles = createStyles((theme) => ({
  buttonGroup: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));
