import React from 'react';
import {View, StyleSheet, FlatList } from 'react-native';
import ProductCard from '../component/ProductCard';
import CustomHeader from '../component/Header';
import { appIcons } from '../Assets';    
import NavService from '../helpers/NavService';
import { useDispatch, useSelector } from 'react-redux';
import { addPrduct,deleteProduct } from '../redux/actions/appAction';

const ProductCart = () => {
  const productData = useSelector((state)=> state.appReducer?.data)
  const dispatch = useDispatch()
  const onDeleteProduct = (id) => {
    dispatch(deleteProduct(id))
  }
  return (
    <View style={styles.container}>
      <CustomHeader onPress={()=> NavService.navigate('Home')}  image={appIcons.arrow} name={'Cart'} />
      <FlatList
        data={productData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <>
              <ProductCard
                productName={item.name}
                price={item.price}
                quantity={item?.quantity}
                stop
                callback={()=> onDeleteProduct(item?.id)}
              />
              </>

          );
        }}
      >
      </FlatList>
    </View>
  )
}


export default ProductCart


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})