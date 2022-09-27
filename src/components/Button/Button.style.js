import { StyleSheet } from "react-native";

import margins from "../../styles/margins";
import borderwidth from "../../styles/borderwidths";
import paddings from "../../styles/paddings";
import borderradiuses from "../../styles/borderradiuses";

const base_styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        margin: margins.button,
        padding: paddings.button,
        borderWidth: borderwidth.button,
        borderRadius: borderradiuses.button,
    },
    title: {
        textAlign: "center",
    },
});
export default {
    primary: StyleSheet.create({
        ...base_styles,
    }),
    secondary : StyleSheet.create({
        ...base_styles,
        container: {
            borderWidth: 0
        }
    })
}