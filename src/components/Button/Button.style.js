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
        container: {
            borderWidth: 0
        },
        title: {
            ...base_styles.title,
        }
    }),
    tertiary : StyleSheet.create({
        title: {
            ...base_styles.title,
            color: "gray",
        }
    }),
    selection : StyleSheet.create({
        ...base_styles,
        title: {
            ...base_styles.title,
            color: "red",
        }
    }),
    none_selection : StyleSheet.create({
        ...base_styles,
        title: {
            ...base_styles.title,
            color: "gray",
        }
    }),
}