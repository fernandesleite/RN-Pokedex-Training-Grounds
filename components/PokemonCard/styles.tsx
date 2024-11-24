import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        minHeight: "auto",
        backgroundColor: "#FFF",
        maxWidth: 104,
        padding: 8,
        alignItems: "center",
        shadowColor: "#333",
        borderRadius: 8
    },
    cardShadow: {
        shadowOffset: {
            width: 8,
            height: 8
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 1,
    },
    pokemonId: {
        fontFamily: "Poppins-Regular",
        fontSize: 8,
        color: "#666666",
        alignSelf: "flex-end"
    },
    pokemonImage: {
        width: 72,
        height: 72,
        aspectRatio: 1,
        marginBottom: 8,
        marginHorizontal: 8
    },
    pokemonName: {
        fontFamily: "Poppins-Regular",
        fontSize: 10,
        color: "#1D1D1D"
    }
});

export default styles;