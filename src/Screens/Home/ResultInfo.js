import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'
export default function ResultInfo({
    navigation,
    route
}) {
    return (
        <View
            className='flex  h-full w-full bg-white'
        >
            <View
                className='flex flex-row justify-between items-center mt-5'>
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
                <Text
                    className=' text-lg font-semibold tracking-wider'
                >Results Info</Text>
                <Text
                    className=' w-[35px] text-base font-semibold'
                ></Text>
            </View>
            <View className='self-center'>
                {
                    route.params.item?.length > 3 ?
                        <FlatList
                            className='w-full  self-center pb-20'
                            data={route.params.item}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    className='bg-white px-5 py-2 flex-row justify-evenly shadow-lg self-center w-full  rounded-xl mt-5  items-center'
                                >
                                    <Text
                                        className=' text-2xl mt-4 font-semibold text-black text-center tracking-widest'
                                    >{item?.user.name}</Text>
                                    <Text
                                        className=' text-2xl mt-4 font-semibold text-black text-center tracking-widest'
                                    >Rank : {index+1}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        :
                        <Text
                            className=' text-2xl font-semibold tracking-wider py-10'
                        >Results Not Declared Yet</Text>
                }
            </View>

        </View >
    )
}