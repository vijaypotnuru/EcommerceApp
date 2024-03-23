import { StatusBar, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,

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
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 44,
        top: 20,
    },
    ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width - 10,
        top: 5,
    },
    rating: {
        top: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: SIZES.large,
    },
    ratingText: {
        color: COLORS.gray,
        fontFamily: "medium",
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.large,

    },
    price: {
        paddingHorizontal: 10,
        fontFamily: "semibold",
        fontSize: SIZES.large,
    }
    ,
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large,
    },

});


export default styles;