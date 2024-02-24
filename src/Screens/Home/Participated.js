import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'
import { useDispatch, useSelector } from 'react-redux'
import { getMyEvents } from '../../../Store/actions'

export default function Participated({
    navigation
}) {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    const participated = useSelector(state => state.Reducers.participated)
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
                        className='bg-primary shadow-2xl self-center w-[88%]  h-[100px] rounded-xl mt-10 justify-center items-center'
                    >
                        <Text
                            className=' text-2xl font-semibold text-white text-center tracking-widest'
                        >{item?.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}