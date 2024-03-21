import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: 182,
        height: 240,
        marginEnd: 22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
    }
    , imageContainer: {
        flex: 1,
        width: 170,
        marginLeft: SIZES.small / 2,
        marginTop: SIZES.small / 2,
        borderRadius: SIZES.small,
        overflow: "hidden",
    }
});


export default styles;