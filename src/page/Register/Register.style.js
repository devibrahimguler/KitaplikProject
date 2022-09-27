import { StyleSheet } from "react-native";

import colors from "../../styles/colors";
import margins from "../../styles/margins";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    inner_container: {
        flex: 1,
        marginBottom: margins.login,
    }
});