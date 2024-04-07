import { View, Text, StatusBar, TextInput, TouchableOpacity, Image, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SelectDropdown from 'react-native-select-dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterAction, getClgs } from '../../../Store/actions'
export default function Register({
  navigation,
  route
}) {
  const type = route.params.type;
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: 0,
    college: ""
  })

  const college = useSelector(state => state.Reducers.college)
  const [loading, setLoading] = React.useState(false)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getClgs(setLoading))
  }, [])
  return (
    <SafeAreaView className='bg-white flex-1 h-full w-full justify-evenly items-center space-y-2'>
      <StatusBar barStyle={'dark-content'} backgroundColor={"transparent"} />
      <KeyboardAwareScrollView
        className='w-full flex space-y-6 '
      >
        <View>
          <Text
            className=' text-2xl font-semibold text-black text-center tracking-widest'
          >{type?"Signup as Teacher":"Signup as Student"}</Text>
          <Text
            className=' text-lg font-regular text-gray-500 text-center tracking-widest'
          >Sign up to create your account</Text>

        </View>
        <View className='w-[100%] items-center justify-center space-y-5'>
          <View className='w-[88%]'>
            <Text
              className='self-start w-full text-[16px] pb-2 font-semibold text-black'
            >
              Name
            </Text>
            <TextInput
              value={data.name}
              onChangeText={(text) => {
                setData({ ...data, name: text })
              }}
              returnKeyType='next'
              keyboardType="default"
              className='border-[1px] h-[50px] rounded-[8px] border-gray-400 w-full px-6'
              placeholder='Jhon Doe'
            />
          </View>
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
              returnKeyType='next'
              keyboardType="email-address"
              className='border-[1px] h-[50px] rounded-[8px] border-gray-400 w-full px-6'
              placeholder='jhon@gmail.com'
            />
          </View>
          <View className='w-[88%]'>
            <Text
              className='self-start w-full text-[16px] pb-2 font-semibold text-black'
            >
              Phone
            </Text>
            <TextInput
              value={data.phone}
              onChangeText={(text) => {
                setData({ ...data, phone: text })
              }}
              returnKeyType='next'
              keyboardType="number-pad"
              className='border-[1px] h-[50px] rounded-[8px] border-gray-400 w-full px-6'
              placeholder='1233-4567-789'
            />
          </View>
          {
            type ?
              null
              :
              <View className='w-[88%]'>
                <Text
                  className='self-start w-full text-[16px] pb-2 font-semibold text-black'
                >
                  Age
                </Text>
                <TextInput
                  value={data.age}
                  onChangeText={(text) => {
                    setData({ ...data, age: text })
                  }}
                  returnKeyType='next'
                  keyboardType="numeric"
                  className='border-[1px] h-[50px] rounded-[8px] border-gray-400 w-full px-6'
                  placeholder='12'
                />
              </View>
          }
          <View className='w-[88%]'>
            <Text
              className='self-start w-full text-[16px] pb-2 font-semibold text-black'
            >
              College Name
            </Text>
            <SelectDropdown
              search
              buttonStyle={{
                width: "100%",
                borderRadius: 8,
                borderColor: "gray",
                borderWidth: 1,
                backgroundColor: "transparent"
              }}
              dropdownStyle={{
                backgroundColor: "white"
              }}
              data={college}
              onSelect={(selectedItem, index) => {
                setData({ ...data, college: selectedItem })
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
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
              returnKeyType='next'
              className='border-[1px] h-[50px] rounded-[8px] border-gray-400 w-full px-6'
              placeholder='********'
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              dispatch(RegisterAction(data, setLoading, navigation, type))
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
                  Sign Up
                </Text>
            }
          </TouchableOpacity>
        </View>

        <Text
          className=' text-lg font-regular font-[500] text-black text-center'
        >
          Already have an account? <Text
            onPress={() => {
              navigation.navigate("Login")
            }}
            className='text-primary'
          >
            Sign In
          </Text> </Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}