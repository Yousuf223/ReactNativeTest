import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ProductCard from '../component/ProductCard';
import CustomHeader from '../component/Header';
import { appIcons } from '../Assets';
import { JsonData } from '../helpers/DummyData';     
import NavService from '../helpers/NavService';
import { useSelector } from 'react-redux';

const Home = () => {
  const productCount = useSelector((state)=> state.appReducer?.data)
  return (
    <View style={styles.container}>
      <CustomHeader onPress={()=> NavService.navigate('ProductCart')} count={productCount?.length} image={appIcons.cart} name={'Home'} />
      <FlatList
        data={JsonData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <>
              <ProductCard
                productName={item.name}
                price={item.price}
                onPress={()=> NavService.navigate('ProductDetail',item)}
              />
              </>

          );
        }}
      >
      </FlatList>
    </View>
  )
}


export default Home


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})