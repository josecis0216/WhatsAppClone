import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

import ChatsScreen from '../screens/ChatsScreen';
import ChatScreen from '../screens/ChatScreen';

const Navigator = () => {
    return (
        <NavigationContainer >

            <Stack.Navigator  >
                <Stack.Screen name="Chats" component={ChatsScreen}></Stack.Screen>
                <Stack.Screen name="Chat" component={ChatScreen}></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
    //styles
});

export default Navigator;