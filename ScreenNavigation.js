import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./Screens/HomeScreen";
import DonorScreen from "./Screens/DonorScreen";
import RecipientScreen from "./Screens/RecipientScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

function ScreenNavigation(props) {
    const stack = createStackNavigator();
    /*
      The whole <NavigationContainer> thing and everything inside it is how the app is handling multi-screens.
      Documentation available at https://reactnavigation.org.
    */
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="RegistrationScreen" screenOptions={{headerShown: false}} >
                <stack.Screen name="Home" component={HomeScreen} />
                <stack.Screen name="DonorScreen" component={DonorScreen}/>
                <stack.Screen name="RecipientScreen" component={RecipientScreen}/>
                <stack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default ScreenNavigation;