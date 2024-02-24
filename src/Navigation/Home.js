import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import Ongoing from '../Screens/Home/Ongoing';
import Participated from '../Screens/Home/Participated';
import MainEventInfo from '../Screens/Home/MainEventInfo';
import EventInfo from '../Screens/Home/EventInfo';
import Results from '../Screens/Home/Results';
const Stack = createNativeStackNavigator()
export default function HomeNav() {
    return (
        <Stack.Navigator screenOptions={({ navigation }) => {
            return {
                detachPreviousScreen: !navigation.isFocused(),
                headerShown: false,
                animation: Platform.OS == "ios" ? "default" : "slide_from_right",
                onTransitionStart: () => Keyboard.dismiss()
            }
        }}
            initialRouteName={'Home'}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Ongoing" component={Ongoing} />
            <Stack.Screen name="Participated" component={Participated} />
            <Stack.Screen name="MainInfo" component={MainEventInfo} />
            <Stack.Screen name="Info" component={EventInfo} />
            <Stack.Screen name="Results" component={Results} />
        </Stack.Navigator>
    )
}
