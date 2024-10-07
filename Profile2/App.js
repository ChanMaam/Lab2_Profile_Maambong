import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from './components/ProfilePage';
import ManageProfilePage from './components/ManageProfilePage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="ManageProfile" component={ManageProfilePage} options={{ title: 'Manage Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
