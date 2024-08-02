import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { useRouter, useLocalSearchParams, Link } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

import ContactsScreen from '@/src/screens/ContactsScreen';

export default function ContactsScreenWindow() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ headerTitleAlign: 'center', title: params.name?.toString(), headerLeft: () => <Link href="/"><AntDesign name="left" size={24} color="black" /></Link> }} />
      <View style={styles.container}>
        <ContactsScreen />
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
