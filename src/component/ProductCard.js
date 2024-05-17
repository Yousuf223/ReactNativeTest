import React, {useEffect, useRef} from 'react';
import { Text, StyleSheet, TouchableOpacity, View,Animated,Image } from 'react-native';
import { colors } from '../helpers/Colors';
import {Swipeable} from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import { appIcons } from '../Assets';

const ProductCard = ({ productName, price, onPress, quantity,stop ,callback}) => {
    const swipeableRef = useRef(null);
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused && swipeableRef.current) {
          swipeableRef.current.close();
        }
      }, [isFocused]);
    
      const renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
          inputRange: [-101, -100, -50, 0],
          outputRange: [1, 0, 0, 20],
        });
        return (
          <TouchableOpacity
            onPress={() => callback(swipeableRef.current.close())}>
                {stop&&         <Animated.View style={[{transform: [{translateX: trans}]}]}>
              <Image style={styles.delete} source={appIcons.delete} />
            </Animated.View>}
    
          </TouchableOpacity>
        );
      };
    return (
        <Swipeable
        ref={swipeableRef}
        friction={1}
        renderRightActions={renderRightActions}
        >
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.container}>
            <View>
                <Text style={styles.productNameStyle}>{productName}</Text>
                {quantity && <Text style={styles.quantity}>Quantity:{quantity}</Text>}
            </View>
            <Text style={styles.price}>${price}</Text>
        </TouchableOpacity>
        </Swipeable>
    )
}


export default ProductCard


const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 14,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 8
    },
    productNameStyle: {
        color: colors.black,
        fontSize: 16,
        fontWeight: "500"
    },
    price: {
        color: colors.black
    },
    quantity:{
        color:colors.black,
        fontSize:13,
        marginTop:3,
        fontWeight:"600"
    },
    delete:{
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginTop: '50%',
        paddingLeft: '12%',
      },
})