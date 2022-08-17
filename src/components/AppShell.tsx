import { AppShell, Stack, useMantineTheme } from "@mantine/core";
import NavHeader from "./headerComponents/Header";
import { HomeComponent } from "./homeComponents/HomeComponent";

export default function AppShellWrapper() {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={<NavHeader />}
    >
      <Stack>
        <HomeComponent />
      </Stack>
    </AppShell>
  );
}
