import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import NotImplementedScreen from '@/src/screens/NotImplementedScreen';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <NotImplementedScreen />
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});