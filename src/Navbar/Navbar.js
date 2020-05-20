import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainPage from '../Main/Main';

const Tab = createMaterialBottomTabNavigator();

function NavigationTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MainPage" component={MainPage} />
    </Tab.Navigator>
  );
}	

const Stack = createStackNavigator();

function LamiaNavbar() {
  return (
    <NavigationContainer>
      <NavigationTabs />
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default LamiaNavbar;