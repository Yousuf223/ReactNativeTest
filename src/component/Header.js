import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { colors } from '../helpers/Colors';

const CustomHeader = ({ name, image, onPress, count }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
                {count && <View style={styles.cartTotalView}>
                    <Text style={{ color: colors.secondary, fontWeight: "800" }}>{count}</Text>
                </View>}
                <Image style={styles.image} source={image} />
            </TouchableOpacity>
            <Text style={styles.productNameStyle}>{name}</Text>
        </View>
    )
}


export default CustomHeader


const styles = StyleSheet.create({
    container: {
        marginTop: "10%",
        flexDirection: "row",
        paddingHorizontal: 13,
        marginBottom: 18
    },
    productNameStyle: {
        color: colors.black,
        fontSize: 17,
        fontWeight: "600",
        flex: 0.9,
        textAlign: "center"
    },
    image: {
        width: 25,
        height: 25,
        left:6      
        // flex:1
    },
    cartTotalView: {
        backgroundColor: colors.white,
        width: 20, height: 20,
        left: 25,
        position: 'absolute', zIndex: 30,
        alignItems: "center",
        justifyContent: "center", top: -4
    }
})