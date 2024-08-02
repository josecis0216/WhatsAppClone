import { ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Message from '../components/message';
import InputBox from '../components/InputBox/index';

import bg from '../../assets/images/BG.png';
import messages from '../../assets/data/messages.json';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const ChatScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.bg} KeyboardVerticalOffset={Platform.os === "ios" ? 60 : 90} >
            <ImageBackground source={bg} style={styles.bg} >
                <FlatList
                    data={messages}
                    renderItem={({ item }) => <Message message={item}
                        style={styles.list} />}
                    inverted
                ></FlatList>
                <InputBox />
            </ImageBackground>
        </KeyboardAvoidingView>

    )
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
        padding: 10,
    }
});

export default ChatScreen;