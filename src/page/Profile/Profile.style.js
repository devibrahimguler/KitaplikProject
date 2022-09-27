import { StyleSheet } from "react-native";

import margins from "../../styles/margins";
import borderradiuses from "../../styles/borderradiuses";
import borderwidths from "../../styles/borderwidths";
import paddings from "../../styles/paddings";
import colors from "../../styles/colors";

const base_style= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly"
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: borderradiuses.image,
        margin: margins.image,
        borderWidth: borderwidths.image,
    },
    username: {
        fontSize: 20,
        textTransform: "capitalize",
        textAlign: "left",
        margin: margins.text,
        textAlign: "center",
    },
    body_sparator: {
        flex: 1,
        padding: paddings.button
    },
});

export default StyleSheet.create({
    ...base_style,
    inner_container: {
        flexDirection: "row",
        justifyContent: "center",
    },
    body_container: {
        flex: 1,
        justifyContent: "center",
        borderTopWidth: 1
    },
    body_inner_container: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
    },
    body_sparator_paylasim: {
        ...base_style.body_sparator,
        borderEndWidth: 1
    },
    body_sparator_favori: {
        ...base_style.body_sparator,
        borderStartWidth: 1
    },
    title: {
        ...base_style.username,
        fontSize: 18,
        marginHorizontal: margins.titleHorizontal,
        marginVertical: margins.titleVertical,
        color: colors.text
    },
    sub_title: {
        ...base_style.username,
        fontSize: 15,
        marginHorizontal: margins.titleHorizontal,
        marginVertical: margins.titleVertical,
    },

});