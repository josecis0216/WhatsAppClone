import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)


const Message = ({ message }) => {
    const isMyMessage = () => {
        if (message.user.id === 'u1') return true;
    };
    return (
        <View style={[styles.container, 
            {
                backgroundColor: isMyMessage() ? '#DCF8CF' : 'white',
                alignSelf: isMyMessage() ? 'flex-end' : 'flex-start'
            }
        ]}>
            <Text>{message.text}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        margin: 5,
        padding: 10,
        width: '80%'
    },
    time: {
        color: 'grey',
        alignSelf: 'flex-end',
    }
});

export default Message;