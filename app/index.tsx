import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ThemedView } from '@/components/ThemedView';

import ChatsScreen from '@/src/screens/ChatsScreen';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ChatsScreen />
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