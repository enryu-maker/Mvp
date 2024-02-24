import { View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native'

import React from 'react'
import { Images } from '../../Components/Images'
import { baseURL2 } from '../../Helper/Helper'
import { useDispatch } from 'react-redux'
import { addParticipate, removeParticipate } from '../../../Store/actions'

export default function EventInfo({
    navigation,
    route,
}) {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
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
                >{route?.params?.item?.title}</Text>
                <Text
                    className=' w-[30px] text-base font-semibold'
                ></Text>
            </View>
            <ScrollView
            className='pb-20'
            >
                <Image
                    className='h-[300px] w-[300px] object-contain mt-10 self-center'
                    source={{ uri: baseURL2 + route.params.item?.game?.image }}
                />
                <Text
                    className=' text-xl w-[88%] text-left mt-5 font-semibold tracking-wider self-center'
                >{route.params.item?.title}</Text>
                <Text
                    className=' text-sm w-[88%] mt-5 font-semibold tracking-wider self-center'
                >{route.params.item?.description}</Text>
                <Text
                    className=' text-sm w-[88%] mt-5 font-semibold tracking-wider self-center'
                >Rules: {route.params.item?.rules}</Text>
                {
                    route?.params?.show ?

                        <TouchableOpacity
                            onPress={() => {
                                dispatch(addParticipate(route.params.item?.id, setLoading))
                            }}
                            className='bg-green-500 shadow-2xl self-center w-[88%] h-[50px] rounded-xl mt-10 justify-center items-center'
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
                                        participate
                                    </Text>
                            }
                        </TouchableOpacity>
                        :
                        route?.params?.parti?
                        <TouchableOpacity
                            onPress={() => {
                                dispatch(removeParticipate(route.params.item?.id, setLoading))
                            }}
                            className='bg-red-500 shadow-2xl mb-10 self-center w-[88%] h-[50px] rounded-xl mt-10 justify-center items-center'
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
                                        Remove
                                    </Text>
                            }
                        </TouchableOpacity>
                        :null

                }
            </ScrollView>
        </View>
    )
}