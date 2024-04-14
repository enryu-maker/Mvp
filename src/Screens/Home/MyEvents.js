import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMyTEvents } from '../../../Store/actions'
import { Images } from '../../Components/Images'
import {View, Text, Image, TouchableOpacity,FlatList } from 'react-native'
import { baseURL2 } from '../../Helper/Helper'
export default function MyEvents({
    navigation
}) {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    const eventteacher = useSelector(state=>state.Reducers.eventteacher)
    console.log(eventteacher)
    React.useEffect(() => {
        dispatch(getMyTEvents(setLoading))
    }, [])
    return (
        <View
            className='flex-1  w-full bg-white'
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
                >My Events</Text>
                <Text
                    className=' w-[30px] text-base font-semibold'
                ></Text>
            </View>
            <FlatList
                className='w-full  self-center pb-20'
                data={eventteacher}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Info", {
                                item: item,
                                show: true,
                                parti: false
                            })
                        }}
                        className='bg-white px-5 py-2 shadow-2xl self-center  rounded-xl mb-10 justify-center items-center'
                    >

                        <Image
                            alt='event'
                            className='h-[120px] w-[300px] object-contain'
                            source={{ uri: baseURL2 + item?.image }}
                        />

                        <Text
                            className=' text-2xl mt-4 font-semibold text-black text-center tracking-widest'
                        >{item?.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
