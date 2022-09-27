import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import auth from '@react-native-firebase/auth';

import Profile from './page/Profile';
import Login from './page/Login';
import Register from './page/Register';
import Share from './page/Share';
import EditBook from './page/EditBook';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const EntryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="RegisterPage" component={Register} />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ShareScreen"
        component={ShareStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="ProfilePage" component={Profile} />
    </Tab.Navigator>
  );
};

const ShareStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SharePage" component={Share} />
      <Stack.Screen
        name="EditBookPage"
        component={EditBook}
        options={{
          headerShown: false,
          presentation: 'fullScreenModal',
        }}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={auth().currentUser ? 'MainScreen' : 'EntryScreen'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="EntryScreen" component={EntryStack} />
        <Stack.Screen name="MainScreen" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
