import { Text, View, Image, StyleSheet, Pressable } from "react-native";
// import { useNavigation } from "@react-navigation/native";

import { Link } from "expo-router";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
  // const navigation = useNavigation();

  return (
    <Pressable style={styles.container}>
      <Link
        href={{
          pathname: "/chat",
          params: { id: chat.user.id, name: chat.user.name },
        }}
      >
        <Image source={{ uri: chat.user.image }} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.row}>
            <Text numberOfLines={1} style={styles.name}>
              {chat.user.name}
            </Text>
            <Text style={styles.subTitle}>
              {dayjs(chat.lastMessage.createdAt).fromNow(true)}
            </Text>
          </View>
          <Text numberOfLines={2} style={styles.subTitle}>
            {chat.lastMessage.text}
          </Text>
        </View>
      </Link>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 60,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderbottomcolor: "lightgray",
    width: 300,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});

export default ChatListItem;

// onPress={() => {
//   navigation.navigate("explore", {
//     id: chat.user.id,
//     name: chat.user.name,
//   });
// }}
