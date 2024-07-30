import { Image, StyleSheet, Platform, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ChatsScreen from '@/src/screens/ChatsScreen';
import ChatScreen from '@/src/screens/ChatScreen';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ChatsScreen />
      {/* <ChatScreen /> */}
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});