import { StyleSheet, View } from "react-native";

import NotImplementedScreen from '@/src/screens/NotImplementedScreen';


export default function NotImplementedScreenWindow() {
    return (
        <View style={styles.container}>
            <NotImplementedScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
})