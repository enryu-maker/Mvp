import { View, Text, StatusBar, TextInput, TouchableOpacity, ActivityIndicator, Image, SafeAreaView, Linking } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'
import { useDispatch } from 'react-redux'
import { LoginAction } from '../../../Store/actions'
export default function Login({
    navigation,
    route
}) {
    const [data, setData] = React.useState({
        email: "",
        password: ""
    })
    const type = route.params.type
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    return (
        <SafeAreaView className='bg-white flex-1 h-full w-full justify-evenly items-center'>
            <StatusBar barStyle={'dark-content'} backgroundColor={"transparent"} />
            <View>
                <Text
                    className=' text-3xl font-semibold text-black text-center tracking-widest'
                >Sign In</Text>
                <Text
                    className=' text-lg font-regular text-gray-500 text-center tracking-widest'
                >{type?"Sign in to Teacher account":"Sign in to Student account"}</Text>

            </View>
            <View className='w-[100%] items-center justify-center space-y-5'>

                <View className='w-[88%]'>
                    <Text
                        className='self-start w-full text-[16px] pb-2 font-semibold text-black'
                    >
                        Email
                    </Text>
                    <TextInput
                        value={data.email}
                        onChangeText={(text) => {
                            setData({ ...data, email: text })
                        }}
                        keyboardType="email-address"
                        className='border-[1px] h-[50px] rounded-[8px] border-gray-400 w-full px-6'
                        placeholder='jhon@gmail.com'
                    />
                </View>

                <View className='w-[88%]'>
                    <Text
                        className='self-start w-full text-[16px] pb-2 font-semibold text-black'
                    >
                        Password
                    </Text>
                    <TextInput
                        value={data.password}
                        onChangeText={(text) => {
                            setData({ ...data, password: text })
                        }}
                        secureTextEntry={true}
                        className='border-[1px] h-[50px] rounded-[8px] border-gray-400 w-full px-6'
                        placeholder='********'
                    />
                </View>
                <View
                    className='w-[88%] self-center justify-center items-end'

                >
                    <Text
                        onPress={() => {
                           Linking.openURL('https://apimvp.pythonanywhere.com/auth/forget-password/')
                        }}
                        className=' text-sm font-semibold text-primary tracking-wide'
                    >
                        Forgot Password?
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        dispatch(LoginAction(data,setLoading,type))
                    }}
                    className='bg-primary w-[88%] h-[50px] rounded-full justify-center items-center'
                >
                    {
                        loading ?
                            <ActivityIndicator
                                color='#fff'
                            />
                            :
                            <Text
                                className='text-center text-lg self-center flex justify-center items-center  tracking-wider font-regular text-white'
                            >
                               { type? "Login as Teacher" : "Login as Student" }
                            </Text>
                    }
                </TouchableOpacity>
            </View>
            <Text
                className=' text-lg font-regular font-[500] text-black text-center'
            >
                Don’t have an account? <Text
                    onPress={() => {
                        navigation.navigate("Register",{
                            type:type
                        })
                    }}
                    className='text-primary'
                >
                    Sign Up
                </Text> </Text>
        </SafeAreaView>
    )
}