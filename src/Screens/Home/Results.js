import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'
import { useDispatch, useSelector } from 'react-redux'
import { getSubEvents } from '../../../Store/actions'
import { baseURL2 } from '../../Helper/Helper'

export default function Results({
    navigation
}) {
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState([])
    const dispatch = useDispatch()
    const sub = useSelector(state => state.Reducers.sub)
    React.useEffect(() => {
        dispatch(getSubEvents(setLoading, 1))
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
                >Results</Text>
                <Text
                    className=' w-[30px] text-base font-semibold'
                ></Text>
            </View>
            <FlatList
                className='w-full  self-center pb-20'
                data={sub}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("ResultInfo", {
                                item: item?.participants,
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