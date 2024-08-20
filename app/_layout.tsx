import { Stack } from "expo-router";
import { useFonts } from "expo-font";

import { Amplify } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "@/amplifyconfiguration.json";
Amplify.configure(config);

export function App({ signOut, user }: WithAuthenticatorProps) {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <button onClick={signOut}>Sign out</button>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="index" options={{ title: 'Chats', headerShown: false }} /> */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </>

    // <>

    //   <h1>Hello {user?.username}</h1>
    //   <button onClick={signOut}>Sign out</button>
    // </>
  );
}

export default withAuthenticator(App);
