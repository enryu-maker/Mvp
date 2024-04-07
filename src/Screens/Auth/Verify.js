import { View, Text, SafeAreaView,StyleSheet, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useDispatch } from 'react-redux'
import { VerifyAction } from '../../../Store/actions'
export default function Verify({
  navigation,
  route
}) {

  const [code,setCode] = React.useState("")
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(false)
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
          >Enter Code</Text>
          <Text
            className=' text-sm font-regular text-gray-500 text-center tracking-widest'
          >We have sent a Verification Code to your email, please enter the code below</Text>
        </View>
        <OTPInputView
          style={{ width: '88%', height: 100  }}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            setCode(code)
          }}
        />
        <TouchableOpacity
          onPress={() => {
            dispatch(VerifyAction({
              "email":route?.params?.email,
              "otp":parseInt(code)
            },setLoading,navigation,route?.params?.type))
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
const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#33c2f5",
  },

  underlineStyleBase: {
    color:"#000000",
    borderRadius:4,
    width: 50,
    height: 50,
    borderWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#33c2f5",
  },
});