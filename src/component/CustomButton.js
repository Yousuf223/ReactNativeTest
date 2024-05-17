import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { colors } from '../helpers/Colors';

const CustomButton = ({ title ,onPress,containerStyle}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[containerStyle,styles.container]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}


export default CustomButton


const styles = StyleSheet.create({
    container: {
        width:'94%',
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        height:54,
        backgroundColor:colors.secondary,
        borderRadius:10
    },
    title: {
        color: colors.white,
        fontSize: 17,
        fontWeight: "600",
    }
})