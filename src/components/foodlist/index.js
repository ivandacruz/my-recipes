import { View, Text, StyleSheet, TouchableOpacity } from "react-native"; 

export function FoodList({data}){
    return(
        <TouchableOpacity>
            <Image
                source={{ url: data.cover }}
                style={StyleSheet.cover} 
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 14,
    },
    cover: {
        width: "100%",
        height: 200,
    }
})
