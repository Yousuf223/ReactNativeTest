// @app
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// drawerComponentt
import Home from '../../screens/Home';
import ProductDetail from '../../screens/ProductDetail';
import ProductCart from '../../screens/ProductCart';


const Stack = createNativeStackNavigator();

const AppNavigation = ({initialRoute}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
        orientation: 'portrait',
      }}>
      <Stack.Screen  name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="ProductCart" component={ProductCart} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
