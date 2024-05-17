// @app
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import AppNavigation from './stacks/appNavigation';
// Nav Service
import NavService from '../helpers/NavService';


class MainNavigation extends Component {
  render() {
    return (
      <NavigationContainer ref={ref => NavService.setTopLevelNavigator(ref)}>
        <View style={styles.container}>
          <AppNavigation initialRoute={undefined} />
        </View>
      </NavigationContainer>
    );
  }
}


export default connect(null, null)(MainNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
