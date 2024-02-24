import { View, Text, StatusBar, TextInput, TouchableOpacity, Image, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SelectDropdown from 'react-native-select-dropdown'
import { useDispatch } from 'react-redux'
import { RegisterAction } from '../../../Store/actions'
export default function Register({
  navigation
}) {
  console.log(navigation)
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    phone:"",
    age:"",
    college:""
  })
  const College = [
    "Janata Vidyalaya & Junior College, Vadner Bhairav, Tal.Chandwad, Dis.Nashik",
    "Janata Vidyalaya & Junior College, Vadalibhoi, Tal.Chandwad, Dist.Nashik",
    "Janata Vidyalaya & Junior College, Kajisangavi, Tal.Chandwad, Dist. Nashik",
    "Smt. Jijabai Raghunathrao Gunjal Madhyamik & Jr.College, Chandwad, Tal. Chandwad,Dist. Nashik",
    "Janata Vidyalaya & Junior College, Nimon, Tal.Chandwad, Dist. Nashik",
    "New English School & Junior College, Dhondgavhan, Tal.Chandwad, Dist.Nashik",
    "Janata Vidyalaya & Junior College, Pimpalgaon Wakhari, Tal.Deola, Dist.Nashik.",
    "Janta Vidyalaya & Junior ColIege, Kumbharde, Tal.Deola, Dist.Nashik",
    "Janata Vidyalaya & Junior College, Deola, Dist.Nashik Lohner",
    "Arts & Commerce College. Vani, Tal.Dindori, Dist. Nashik",
    "Janata English School & Junior College, Dindori, Tal.Dindori, Dist.Nashik",
    "Shri. C.S. Vidyalaya and Junior College, Khedgaon, Tal. Dindori, Dist. Nashik",
    "K.R.T.High School & Junior College, Mohadi, Tal.Dindori, Dist.Nashik",
    "K.R.T.High School & Junior College, Mohadi, Tal.Dindori, Dist.Nashik",
    "Janata Vidyalaya & Junior College, Karanjwan, Tal. Dindori, Dist. Nashik",
    "Kar. P.G,Arts, Commerce Science College, Igatpuri, Tal.lgatpuri, Dist. Nashik",
    "Janała Vidyalaya & Junior College, Ghoti, Tal.lgatpuri, Dist.Nashik",
    "Janata Vidyalaya & Junior College, Igatpuri, Tal.lgatouri, Dist.Nashik",
    "Mahatma Phule High School & Junior College, Bej, Tal.Kalwan, Dist.Nashik",
    "Mahatma Phula High School & Junior College, Mokbhangi, Tal. Kalwan, DisŁ Nashik",
    "Janata Vidyabya & Junior College, Aghar, Tal.Malegaon, Dist. Nashik",
    "Janata Vidayala & Junior College, Bhalur, Tal. Nandgaon, Dist. Nashik",
    "Art & Commerce College, Soygaon, Tal.Malegaon, Dist. Nashik",
    "Arts, Commerce & Science College, Nandgaon, Tal. Nandgaon, Dist. Nashik",
    "Janata Vidyalaya & Junior College, Jategaon, Tal. Nandgaon, Dist. Nashik",
    "Art & Commerce College, Manmad, Tal.Nandgaon, Dist. Nashik",
    "K.R.T. Arts, B.H.Commerce & A.M. Science College, Nashik",
    "Smt..VimIaben Khimji Tejookaya Arts, Commerce & Science College, Deolali Camp, Tal.& Dist. Nashik",
    "Kar. S.K W. Art, Commerce & Science College, CIDCO, Nashik",
    "K.B.H.High School & Junior College, Girnare, Tal. & Dist.Nashik",
    "Shri. C.S.Vidyalaya & Junior College, Makhmalabad, Tal.& Dist.Nashik",
    "Janata Vidyalaya & Jr.College, Satpur, Tal.& Dist. Nashik",
    "College of Commerce, Management & Computer Science, Nashik",
    "Horizon, Academy & Junior College, Nashik ( ICSC / State Board)",
    "K.K.Wagh Arts, Commerce & Science College, Pimpalgaon Baswant Tal.Niphad, Dist. Nashik",
    "Kar.Ganpat Dada More Arts, Commerce & Science College, Niphad, Tal.Niphad, Dist. Nashik",
    "Arts, Commerce & Science College, Ozar (Mig), Tal.Niphad, Dist.Nashik",
    "Janata English School & Junior College, Saykheda, Tal.Niphad. Dist.Nashik",
    "Shri. D.R.BhosaIe Vidyalaya & Junior College, Deogaon, Tal.Niphad, Dist. Nashik",
    "K.R.T. High School, & Junior College, Mouje Sukene, Tal. Niphad, Dist. Nashik",
    "Janata Vidyalaya & Junior College, Nandurdi, Tal.Niphad, Dist. Nashik",
    "Arudh Vidyalaya & Junior College, Mhalsakore, Tal.Niphad, Dist.Nashik",
    "P.T.Vidyalaya & Junior College, Khedalezunge, Tal.Niphad, Dist. Nashik",
    "Kavivarya Kusumagraj Vidyalaya & Jr.College, Shirwade Vani, Tal. Chandwad, Dist. Nashik",
    "Janata Vidyalaya & Junior College, Nandur Madhyameshwar, Tal.Niphad, Dist.Nashik",
    "Ashram School & Junior College, Peth, Tal.Peth, Dist.Nashik",
    "Kar.Abasaheb Alas N.M.Sonawane, Arts, Science & Commerce College, Satana, Tal.Satana, Dist. Nashik",
    "New English School & Junior College, Taharabad, Tal.Baglan, Dist.Nashik",
    "Jijamata Girls High School & Junior College, Satana, Tal.Satana, Dist.Nashik",
    "Pandit Dhama Vidyalaya & Junior College, Lakhamapur, Tal.Satana, Dist.Nashik",
    "Janata English School & Junior College, Jaykheda, Tal. Satana, Dist. Nashik",
    "Janata Vidyalaya & Junior .College, Karanjad, Tal. Satana, Dist Nashik",
    "Nutan English School & Junior College, Brahmangaon, Tal.Satana , Dist Nashik",
    "G.M.D. Art, B.W. Commerce & Science College Sinnar, Tal.Sinnar, Dist. Nashik",
    "New English School & Junior College, Vadangali, Tal.Sinnar, Dist. Nashik",
    "Janata Vidyalaya & Junior College, Naigaon, Tal.Sinnar, Dist.Nashik",
    "Janata Vidyalaya & Junior College, Pandhurli, Tal. Sinnar, Dist. Nashik",
    "Janata Vidayala & Junior College, Dubere, Tal.Sinnar, Dist.Nashik",
    "Arts, Commerce College, Trimabkeshwar, Tal. Trimabkeshwar Dist. Nashik",
    "Janata Vidyalaya & Junior College, Patode, Tal.YeoIa, Dist.Nashik",
    "Janata Vidyabya & Junior College, Gavandgaon, Tal.Yeola, Dist.Nashik",
    "Janata Vidyalaya & Junior College, Mukhed, Tal.Yeola, Dist.Nashik",
    "Janata Vidyalaya & Junior College, Jalgaon Neur, Tal.YeoIa, Dist.Nashik",
    "Arts & Commerce College, Vadner Bhairav, Tal. Chandwad, Dist.Nashik (Permanent Non-Grant)",
    "Arts & Commerce College, Vani, Tal.Dindori, Dist.Nashik",
    "Arts, Science & Commerce College, Dindori, Tal.Dindori, Dist.Nashik",
    "Arts & Commerce College, Khedgaon, Tal. Dindori, Dist.Nashik (Permanent Non-Grant) ",
    "Kar P G Arts, Commerce & Science College, lgatpuri, Tal.lgatpuri, Dist.Nashik",
    "Arts, & Commerce College, Soyegaon, Tal.Malegaon, Dist.Nashik (Permanent Non-Grant)",
    "Arts, Commerce & Science College, Nandgaon, Tal. Nandgaon, Dist.Nashik",
    "Arts & Commerce College, Manmad, Tal.Nandgaon, Dist.Nashik (Permanent Non-Grant)",
    "K.R.T. Arts, B.H.Commerce & A.M. Science College, Nashik",
    "Smt Vimlaben Khimji Tejookaya Arts, Commerce & Science CoIlege, Deolali Camp, Ta1.& Dist.Nashik",
    "Kar S K W Arts, Commerce & Science College, Cidco, Nashik",
    "Arts & Commerce College, Makhamalabad, Ta1.& Dist.Nashik (Permanent Non-Grant)",
    "Arts & Commerce College, Satpur, Nashik (Permanent Non-Grant)",
    "College of Commerce, Management & Computer Science, Nashik (Permanent Non-Grant)",
    "College of Education, Gangapur Road, Nashik",
    "K.K.Wagh Arts, Commerce & Science College, Pimpalgaon Baswant, Tal.Niphad, Dist.Nashik",
    "Kar Ganpat Dada More Arts, Commerce & Science College, Niphad, Tal.Niphad, Dist.Nashik",
    "Kar Ganpat Dada More Arts, Commerce & Science College, Niphad, Tal.Niphad, Dist.Nashik",
    "Arts, Commerce & Science CoIlege, Saykheda, Tal.Niphad, Dist.Nashik",
    "Kar.Abasaheb Alas N.M.Sonawane, Arts, Science & Commerce College, Satana, Tal.Satana, Dist.Nashik",
    "Arts & Commerce College, Taharabad, Tal.Baglan, Dist.Nashik",
    "G M D Arts, B.W Commerce & Science College Sinnar, Tal.Sinnar, Dist.Nashik",
    "Arts & Commerce CoIlege, Traymbakeshwar, Tal. Traymbakeshwar, Dist.Nashik",
]
  const [loading, setLoading] = React.useState(false)
  const dispatch = useDispatch()
  return (
    <SafeAreaView className='bg-white flex-1 h-full w-full justify-evenly items-center space-y-2'>
      <StatusBar barStyle={'dark-content'} backgroundColor={"transparent"} />
      <KeyboardAwareScrollView
        className='w-full flex space-y-6 '
      >
        <View>
          <Text
            className=' text-3xl font-semibold text-black text-center tracking-widest'
          >Sign Up</Text>
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
          <View className='w-[88%]'>
            <Text
              className='self-start w-full text-[16px] pb-2 font-semibold text-black'
            >
              College Name
            </Text>
          <SelectDropdown
          search
            buttonStyle={{
              width:"100%",
              borderRadius:8,
              borderColor:"gray",
              borderWidth:1,
              backgroundColor:"transparent"
            }}
            dropdownStyle={{
              backgroundColor:"white"
            }}
            data={College}
            onSelect={(selectedItem, index) => {
              setData({...data,college:selectedItem})
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
             dispatch(RegisterAction(data,setLoading,navigation))
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