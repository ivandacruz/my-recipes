import { View, Text, StyleSheet } from "react-native";

export function Logo(){
    return(
        <View style={styles.logoArea}>
            <Text style={styles.logo}>Receita Fácil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoArea: {
        backgroundColor: "gold",
        alignSelf: "flex-start",
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8
    },
    logo:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    }
})