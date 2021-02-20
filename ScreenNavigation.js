import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from "./Screens/InitialScreen";
import DonorScreen from "./Screens/DonorScreen";
import RecipientScreen from "./Screens/RecipientScreen";

function ScreenNavigation(props) {
    const stack = createStackNavigator();
    /*
      The whole <NavigationContainer> thing and everything inside it is how the app is handling multi-screens.
      Documentation available at https://reactnavigation.org.
    */
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Initial" screenOptions={{headerShown: false}} >
                <stack.Screen name="Initial" component={InitialScreen} />
                <stack.Screen name="DonorScreen" component={DonorScreen}/>
                <stack.Screen name="RecipientScreen" component={RecipientScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default ScreenNavigation;