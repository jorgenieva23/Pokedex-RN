import { createContext, PropsWithChildren } from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  MD3LightTheme,
  MD3DarkTheme,
  adaptNavigationTheme,
  PaperProvider,
} from 'react-native-paper';
import { useColorScheme } from 'react-native';

const {
  LightTheme: NavigationLightTheme,
  DarkTheme: NavigationDarkThemeAdapted,
} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export const ThemeContext = createContext({
  isDark: false,
  paperTheme: MD3LightTheme,
  navTheme: NavigationDefaultTheme,
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const paperTheme = isDark ? MD3DarkTheme : MD3LightTheme;
  const navTheme = isDark ? NavigationDarkThemeAdapted : NavigationLightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, paperTheme, navTheme }}>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer theme={navTheme}>{children}</NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};
