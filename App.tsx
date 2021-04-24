import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ThemeProvider, ThemeType, defaultTheme} from 'react-native-magnus';
import {QueryClient, QueryClientProvider} from 'react-query';
import deepMerge from 'deepmerge';

// screens
import MainScreen from './src/screen/main';

const queryClient = new QueryClient();

const theme: ThemeType = {
  fontFamily: {
    normal: 'Livvic-Regular',
    bold: 'Livvic-Bold',
    100: 'Livvic-Thin',
    200: 'Livvic-ExtraLight',
    300: 'Livvic-Light',
    400: 'Livvic-Regular',
    500: 'Livvic-Medium',
    600: 'Livvic-SemiBold',
    700: 'Livvic-Bold',
    800: 'Livvic-Bold',
    900: 'Livvic-Black',
  },
  colors: {
    primary50: '#def6fe',
    primary100: '#bde6ef',
    primary200: '#9ad8e1',
    primary300: '#74cbd4',
    primary400: '#51bfc8',
    primary500: '#37aaae',
    primary600: '#277e88',
    primary700: '#175562',
    primary800: '#032f3b',
    primary900: '#001016',
  },
  components: {
    ...defaultTheme.components,
    Input: {
      bg: 'gray100',
    },
    Text: {
      fontFamily: 'Livvic',
    },
  },
};
const extendedTheme = deepMerge(defaultTheme, theme);

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={extendedTheme}>
        <SafeAreaView style={styles.container}>
          <MainScreen />
        </SafeAreaView>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
