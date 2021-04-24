import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ThemeProvider} from 'react-native-magnus';
import {QueryClient, QueryClientProvider} from 'react-query';

// screens
import MainScreen from './src/screen/main';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
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
