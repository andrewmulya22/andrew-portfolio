import { Group, Header } from "@mantine/core";
import { createStyles } from "@mantine/core";
import ButtonGroup from "./ButtonGroup";
import IconGroup from "./IconGroup";

export default function NavHeader() {
  const { classes } = useStyles();

  return (
    <Header height={70} p="md">
      <Group position="apart" className={classes.headerStyle}>
        <ButtonGroup />
        <IconGroup />
      </Group>
    </Header>
  );
}

const useStyles = createStyles((theme, _params, getRef) => ({
  headerStyle: {
    marginLeft: "2vh",
    paddingTop: "0.5vh",
  },
}));
