import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserType from '../Screens/Auth/UserType';
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import Forget from '../Screens/Auth/Forget';
import Verify from '../Screens/Auth/Verify';
import New from '../Screens/Auth/New';
const Stack = createNativeStackNavigator()

export default function Auth() {

    return (
        <Stack.Navigator screenOptions={({ navigation }) => {
            return {
                detachPreviousScreen: !navigation.isFocused(),
                headerShown: false,
                animation: Platform.OS == "ios" ? "default" : "slide_from_right",
                onTransitionStart: () => Keyboard.dismiss()
            }
        }}
            initialRouteName={'Type'}
        >
            <Stack.Screen name="Type" component={UserType} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Forget" component={Forget} />
            <Stack.Screen name="Verify" component={Verify} />
            <Stack.Screen name="New" component={New} />

        </Stack.Navigator>
    )
}