import { StyleSheet } from "react-native";

import margins from "../../styles/margins";
import borderwidth from "../../styles/borderwidths";
import paddings from "../../styles/paddings";
import borderradiuses from "../../styles/borderradiuses";

export default StyleSheet.create({
    container: {
        margin: margins.textInput,
        padding: paddings.textInput,
        borderWidth: borderwidth.textInput,
        borderRadius: borderradiuses.textInput,
    },
});