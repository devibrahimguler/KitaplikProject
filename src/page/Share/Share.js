import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import styles from "./Share.style";

import useFetch from "../../hooks/useFetch";
import ShareCard from "../../components/card/ShareCard";

const Share = ({navigation}) => {
    const {loading, error, data} = useFetch("shared");
    const toEditBook = () => {
        navigation.navigate("EditBookPage");
    }
    const shareBook = () => {
        return (
            <TouchableOpacity onPress={toEditBook}>
                <Text>Ekle</Text>
            </TouchableOpacity>
        );
    }
    useEffect(()=>{
        navigation.setOptions({
            headerRight: shareBook,
        })
    },[]);
    const renderShared = ({item}) => <ShareCard data={item.data()} />;
    return (
        <FlatList
            data={data}
            renderItem={renderShared}
        />
    );
}

export default Share;