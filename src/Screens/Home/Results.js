import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents, getRanks } from '../../../Store/actions'

export default function Results({
    navigation
}) {
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState([])
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getRanks(setLoading, setData))
        console.log(data)
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
            <TouchableOpacity
                className='bg-primary shadow-2xl self-center w-[88%]  h-[100px] rounded-xl mt-10 justify-center items-center'
            >
                <Text
                    className=' text-2xl font-semibold text-white text-center tracking-widest'
                >Soccer Game</Text>
            </TouchableOpacity>
            <Text
                className=' text-2xl font-semibold text-black text-center tracking-widest'
            >Rank1 : Sample1</Text>
            <Text
                className=' text-2xl font-semibold text-black text-center tracking-widest'
            >Rank2 : Sample1</Text>
            <Text
                className=' text-2xl font-semibold text-black text-center tracking-widest'
            >Rank3 : Sample1</Text>
        </View>
    )
}