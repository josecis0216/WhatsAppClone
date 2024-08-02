import { useState } from 'react';
import { View, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { AntDesign, MaterialIcons } from "@expo/vector-icons";


const InputBox = () => {
    const [newMessage, setNewMessage] = useState('');

    const onSend = () => {
        console.warn('sending a new message: ', newMessage);

        setNewMessage('');
    };

    return (
        <SafeAreaView edges={["bottom"]} style={styles.container}>
            <View style={styles.container}>
            {/* Icon */}
            <AntDesign name="plus" size={20} color="royalblue" />

            {/* Text Input */}
            <TextInput value={newMessage} onChangeText={setNewMessage} style={styles.input} placeholder="type your message..." />

            {/* Icon */}
            <MaterialIcons onPress={onSend} style={styles.send} name="send" size={16} color="white" />
        </View>
        </SafeAreaView>        
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 5,
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        marginHorizontal: 10,

        borderRadius: 50,
        borderColor: 'lightgray',
        borderWidth: StyleSheet.hairlineWidth
    },
    send: {
        backgroundColor: 'royalblue',
        borderRadius: 15,
        overflow: 'hidden',
    },
    
});

export default InputBox;