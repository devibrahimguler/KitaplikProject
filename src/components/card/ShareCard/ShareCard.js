import React from "react";
import { View, Text } from "react-native";

const ShareCard = ({data}) => {
    console.log(data);
    return (
        <View>
            <Text>{data.author}</Text>
            <Text>{data.bookName}</Text>
            <Text>{data.docId}</Text>
            <Text>{data.image}</Text>
            <Text>{data.type}</Text>
            <Text>{data.userId}</Text>
            <Text>{data.username}</Text>
        </View>
    );
}

export default ShareCard;