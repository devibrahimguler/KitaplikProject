import { StyleSheet, Dimensions } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        borderWidth: 1,
        borderRadius: 20,
    },
    body_container: {
        flex: 1,
        justifyContent: "space-between",
        margin :10,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 20,
        alignSelf: "center"
    },
    favori:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 5
    },
    title:{
        fontSize: 10,
        fontWeight: "bold",
        marginTop: 7
    },
    username:{
        fontSize: 20,
        fontWeight: "bold",
        marginStart: 10,
    },
    book_name:{
        fontSize: 16,
        marginStart: 10,
    },
    author:{
        fontSize: 16,
        marginStart: 10,
    },
    type:{
        fontSize: 16,
        marginStart: 10,
    },
});