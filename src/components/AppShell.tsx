import { AppShell, Stack, useMantineTheme, Footer } from "@mantine/core";
import NavHeader from "./headerComponents/Header";
import { HomeComponent } from "./homeComponents/HomeComponent";
import { EducationComponent } from "./educationComponents/EducationComponent";
import { ExperienceComponent } from "./experienceComponents/ExperienceComponent";
import "./AppShell.css";
import SkillComponent from "./skillComponents/SkillComponent";

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
        <EducationComponent />
        <ExperienceComponent />
        <SkillComponent />
      </Stack>
    </AppShell>
  );
}
