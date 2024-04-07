import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'
import { useDispatch, useSelector } from 'react-redux'
import { getMyEvents } from '../../../Store/actions'
import { baseURL2 } from '../../Helper/Helper'

export default function Participated({
    navigation
}) {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    const participated = useSelector(state => state.Reducers.participated)
    console.log(participated)
    React.useEffect(() => {
        dispatch(getMyEvents(setLoading))
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
                >Participated</Text>
                <Text
                    className=' w-[30px] text-base font-semibold'
                ></Text>
            </View>
            <FlatList
                className='w-full  self-center pb-20'
                data={participated}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Info", {
                                item: item,
                                show: false,
                                parti : true
                            })
                        }}
                        className='bg-white shadow-2xl self-center w-[88%]  rounded-xl mt-10 justify-center items-center'
                    >
                        <Image
                            alt='event'
                            className='h-[120px] w-[300px] object-contain'
                            source={{ uri: baseURL2 + item?.event?.image }}
                        />

                        <Text
                            className=' text-2xl mt-4 font-semibold text-black text-center tracking-widest'
                        >{item?.event['title']}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}