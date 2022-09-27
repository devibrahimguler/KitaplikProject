import { StyleSheet, Dimensions } from "react-native";

import margins from "../../styles/margins";

const device = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        margin: 10,
    },
    inner_container:{
        margin: 10,
        borderWidth: 1,
        paddingVertical: 20,
        borderRadius: 20,
    },
    image:{
        height: device.height /4 + 27,
        width: device.width - 80,
        alignSelf: "center",
        borderRadius: 20
    },
});