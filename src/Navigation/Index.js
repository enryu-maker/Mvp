import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Auth from './Auth';
import { useDispatch, useSelector } from 'react-redux';
import HomeNav from './Home';
import { Init } from '../../Store/actions';

export default function Index() {
    const access = useSelector(state=>state.Reducers.access)
    console.log("in",access)
    const dispatch = useDispatch()
    const [loading,setLoading] = React.useState(false)
    React.useEffect(()=>{
        dispatch(Init(setLoading))
    },[])
    return (
        <NavigationContainer>
           {
            access===null?
            <Auth/>
            :
            <HomeNav/>
           }
        </NavigationContainer>
    )
}