import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutAction } from '../../../Store/actions'

export default function Home({
  navigation
}) {
  const dispatch = useDispatch()
  const is_teacher = useSelector(state=>state.Reducers.is_teacher)
  const data = [
    {
      id: 1,
      text: "Ongoing \n Events",
      button: "Ongoing",
      uri: "https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg"
    },
    {
      id: 2,
      text: "Paticipated \n Events",
      button: "Participated",
      uri:"https://img.freepik.com/free-vector/box-full-sport-equipments_1308-37207.jpg"
    },
    {
      id: 3,
      text: "Results",
      button: "Results",
      uri:"https://img.freepik.com/premium-vector/athletes-blue-figures-silhouettes_18591-67900.jpg"
    },

  ]

  const data2 = [
    {
      id: 1,
      text: "Ongoing \n Events",
      button: "Ongoing",
      uri: "https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg"
    },
    {
      id: 2,
      text: "Add \n Events",
      button: "AddEvents",
      uri:"https://img.freepik.com/free-vector/box-full-sport-equipments_1308-37207.jpg"
    },
    {
      id: 3,
      text: "My Events",
      button: "MyEvents",
      uri:"https://img.freepik.com/premium-vector/athletes-blue-figures-silhouettes_18591-67900.jpg"
    },
  ]
  return (
    <View
      className='flex justify-center items-center h-full bg-white'
    >
      <Image
        className='w-[180px] h-[180px]'
        source={Images.mvp} />
      <Text
        className=' text-3xl font-semibold text-black text-center tracking-widest'
      >MVP SPORTS APP</Text>
      <FlatList
        numColumns={2}
        className='  self-center pb-50 '
        data={is_teacher?data2 : data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={item?.id}
            onPress={() => {
              navigation.navigate(item?.button)
            }}
            className='shadow-2xl m-5 h-[180px] w-[150px]  rounded-xl flex  justify-center items-center'
          >
            <Image
              className='w-[100%] h-[75%] object-contain'
              source={{
                uri: item?.uri
              }}
            />
            <Text
              className=' text-lg font-semibold text-black text-center tracking-widest'
            >{item?.text}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(LogoutAction())
        }}
        className='bg-red-500 shadow-2xl mb-5 w-[88%] h-[50px] rounded-xl mt-10 justify-center items-center'
      >
        <Text
          className=' text-2xl font-semibold text-white text-center tracking-widest'
        >Logout</Text>
      </TouchableOpacity>
    </View>
  )
}