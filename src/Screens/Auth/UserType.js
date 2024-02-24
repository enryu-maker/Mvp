import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'

export default function UserType({
  navigation
}) {
  return (
    <View className="flex-1 items-center justify-center bg-white h-full w-full'"
    >
      <StatusBar barStyle={'light-content'} />
      <Image
      className='w-full h-[400px]'
      source={Images.mvp}/>
        <View
          className='justify-center items-center w-full'
        >
          <View
            className='bg-white justify-center items-center h-[180px] w-full rounded-tl-[32px] rounded-tr-[32px] '>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login", {
                  type: "Individual"
                })
              }}
              className='bg-primary w-[88%] h-[50px] rounded-full justify-center items-center'
            >
              <Text
                className='text-center text-lg  tracking-wider font-regular text-white'
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}