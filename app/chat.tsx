import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { useRouter, useLocalSearchParams, Link } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

import ChatScreen from '@/src/screens/ChatScreen';

export default function ChatScreenWindow() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: params.name?.toString(), headerLeft: () => <Link href="/"><AntDesign name="left" size={24} color="black" /></Link> }} />
      <View style={styles.container}>
        <ChatScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
