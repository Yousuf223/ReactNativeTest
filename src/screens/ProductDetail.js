import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomHeader from '../component/Header';
import { appIcons } from '../Assets';
import { colors } from '../helpers/Colors';
import CustomButton from '../component/CustomButton';
import NavService from '../helpers/NavService';
import { addPrduct } from '../redux/actions/appAction';
import { useDispatch,useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
const ProductDetail = ({route}) => {
    const dispatch = useDispatch()
    const productData = useSelector((state)=> state?.appReducer?.data)
    console.log('productDataproductData',productData)
    const items = route?.params
    const [count,setCount] = useState(1)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = ()=>{
        if(count > 1){
            setCount(count -  1)
        }
    } 
    const onSubmit = () => {
        const arr = {
            quantity:count,
            name:items?.name,
            price:items?.price,
            id:items?.id
        }
        dispatch(addPrduct(arr)) 
        Toast.show({
            text1: `Product Added Successfully`,
            type: 'success',
            visibilityTime: 3000
          });
         NavService.navigate('ProductCart')
    }
    return (
        <View style={styles.container}>
            <CustomHeader onPress={()=> NavService.goBack()} image={appIcons.arrow} name={'Product Detail'} />
            <View style={styles.row}>
                <Text style={styles.name}>{items?.name}</Text>
                <View style={styles.row1}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>decrement() } style={styles.btnsStyle}>
                    <Text style={styles.inc}>-</Text>
                </TouchableOpacity>
                <Text style={styles.countStyle}>{count}</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={()=> increment()} style={styles.btnsStyle}>
                    <Text style={styles.inc}>+</Text>
                </TouchableOpacity>
            </View>
            </View>
            <Text style={styles.price}>${items?.price}</Text>
            <CustomButton onPress={() => onSubmit()} containerStyle={styles.containerStyle} title={'Add To Cart'} />
        </View>
    )
}


export default ProductDetail
      

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",  
        paddingHorizontal:15,
        marginTop:10
    },
    name:{
        color:colors.black,
        fontSize:16,
        fontWeight:"500"
    },
    price:{
        color:colors.black,
        fontWeight:'500',
        paddingLeft:15,paddingTop:10
    },
    containerStyle:{
        position:"absolute",
        bottom:'6%'
    },
    row1:{
        flexDirection:"row",
        alignItems:"center"
    },
    btnsStyle:{
        backgroundColor:colors.primary,
        width:25,
        height:25,
        alignItems:"center",
        justifyContent:"center",borderRadius:3
    },
    countStyle:{
        paddingHorizontal:10,
        color:colors.black
    },
    inc:{
        fontSize:18
    }
})           