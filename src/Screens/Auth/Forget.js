import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'

export default function Forget({
  navigation
}) {
  const [data, setData] = React.useState({
    email: "",
  })
  const [loading,setLoading] = React.useState(false)
  return (
    <SafeAreaView className='bg-white w-full items-center'>
      <TouchableOpacity
        className='self-start pl-6'
        onPress={() => {
          navigation.goBack()
        }}
      >
        <Image
          source={Images.back}
          className=' object-contain h-[20px] w-[20px]'
        />
      </TouchableOpacity>
      <View
        className='bg-white w-full mt-[100px]  justify-start  items-center h-full space-y-10'
      >
        <View className='space-y-2'>
          <Text
            className=' text-3xl font-semibold text-black text-center tracking-widest'
          >Forget Password</Text>
          <Text
            className=' text-lg font-regular text-gray-500 text-center tracking-widest'
          >Enter your Email</Text>
        </View>
        <View className='w-[88%]'>
          <Text
            className='self-start w-full text-[16px] pb-2 font-semibold text-black'
          >
            Email
          </Text>
          <TextInput
            value={data.email}
            onChange={(text) => {
              setData({ ...data, email: text })
            }}
            keyboardType="email-address"
            className='border-[1px] h-[50px] rounded-[8px] border-gray-400 w-full px-6'
            placeholder='jhon@gmail.com'
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Verify", {
              type: "Individual"
            })
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
                Verify
              </Text>
          }
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}