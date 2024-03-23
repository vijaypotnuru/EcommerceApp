import { StatusBar, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    container: {
        flex: 1,

    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999,
    }
    ,
    image: {
        aspectRatio: 1,
        resizeMode: "cover",

    },
    details: {
        marginTop: -SIZES.large,
    }

});


export default styles;