import { ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Message from '../components/message';
import InputBox from '../components/InputBox/index';

import bg from '../../assets/images/BG.png';
import messages from '../../assets/data/messages.json';


const ChatScreen = () => {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.bg} >
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