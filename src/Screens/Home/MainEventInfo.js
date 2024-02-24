import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'
import { useDispatch, useSelector } from 'react-redux'
import { getMyEvents } from '../../../Store/actions'
import { baseURL2 } from '../../Helper/Helper'

export default function MainEventInfo({
    navigation,
    route
}) {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        dispatch(getMyEvents(setLoading))
    }, [])
    return (
        <View
            className='flex justify-center w-full bg-white'
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
                >{route.params.item?.title}</Text>
                <Text
                    className=' w-[30px] text-base font-semibold'
                ></Text>
            </View>
            <Image
                className='h-[300px] w-[300px] object-contain mt-10 self-center'
                source={{ uri: baseURL2 + route.params.item?.image }}
            />
            <Text
                className=' text-xl font-semibold tracking-wider self-center'
            >{route.params.item?.title}</Text>
            <Text
                className=' text-lg font-semibold tracking-wider mt-6 self-center'
            >{"Ongoing Games"}</Text>

            <FlatList
                className='w-[88%]  self-center pb-50 '
                data={route.params.item?.sub_events}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Info", {
                                item: item,
                                show:true,
                                parti : false
                            })
                        }}
                        className='bg-primary shadow-2xl w-[88%] self-center  h-[100px] rounded-xl mt-10 justify-center items-center'
                    >
                        <Text
                            className=' text-sm font-semibold text-white text-center tracking-widest'
                        >{item?.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}