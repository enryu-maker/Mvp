import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from '../../../Store/actions'
import { baseURL, baseURL2 } from '../../Helper/Helper'

export default function Ongoing({
    navigation
}) {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    const events = useSelector(state => state.Reducers.events)
    console.log("ev", events)
    React.useEffect(() => {
        dispatch(getEvents(setLoading))
    }, [])

    return (
        <View
            className='flex justify-center h-full w-full bg-white'
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
                >Ongoing</Text>
                <Text
                    className=' w-[30px] text-base font-semibold'
                ></Text>
            </View>
            <FlatList
                className='w-full  self-center pb-20'
                data={events}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('MainInfo',{
                                item:item
                            })
                        }}
                        className='bg-primary px-5 py-2 shadow-2xl self-center  rounded-xl mt-10 justify-center items-center'
                    >

                        <Image
                            className='h-[300px] w-[300px] object-contain'
                            source={{ uri: baseURL2 + item?.image }}
                        />

                        <Text
                            className=' text-2xl mt-4 font-semibold text-white text-center tracking-widest'
                        >{item?.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}