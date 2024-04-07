import { View, Text, StatusBar, TextInput, TouchableOpacity, ActivityIndicator, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Images } from '../../Components/Images'
import { useDispatch } from 'react-redux'
import ImagePicker from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { addEvents } from '../../../Store/actions';
export default function AddEvents({
    navigation,
}) {
    const [data, setData] = React.useState({
        title: "",
        game: "",
        description: "",
        rules: "",
        image: ""
    })
    const [loading, setLoading] = React.useState(false)
    const [image, setImage] = React.useState(null);
    const dispatch = useDispatch()
    const pickImage = async () => {
        let result = await ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7,
        });

        if (result.cancelled) {
            // setImageError(true);
        }

        if (!result.cancelled) {
            const newImageUri = Platform.OS === "ios" ? 'file:///' + result?.sourceURL.split('file:/').join('') : 'file:///' + result?.path.split('file:/').join('')
            const uriParts = result?.path?.split('.')
            const fileType = uriParts[uriParts.length - 1];
            setImage({
                type: `image/${fileType}`,
                uri: result?.path,
                name: `photo.${fileType}`
            });
            setImageError(false);
        }
    };
    return (
        <SafeAreaView className='bg-white flex-1 h-full w-full items-center'>
            <StatusBar barStyle={'dark-content'} backgroundColor={"transparent"} />
            <View
                className='flex flex-row w-full justify-between items-center mt-5'>
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
                >Add Events</Text>
                <Text
                    className=' w-[30px] text-base font-semibold'
                ></Text>
            </View>
            <ScrollView className='w-[100%] space-y-5 self-center'>
                <TouchableOpacity onPress={pickImage}>
                    <View
                        style={{
                            alignSelf:"center",
                            justifyContent: 'center',
                            textAlign: 'center',
                            
                        }}
                    >
                        {image ? (
                            <View>
                                <Image
                                    source={{ uri: image?.uri }}
                                    style={{
                                        borderWidth: 2,
                                        width: 140,
                                        height: 140,
                                        borderRadius: 140 / 2,
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                    }}
                                    resizeMode='cover'
                                />
                            </View>
                        ) : (
                            <View style={
                                {
                                    borderWidth: 2.5,
                                    width: 140,
                                    height: 140,
                                    borderRadius: 140 / 2,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    textAlign: 'center',
                                }
                            }>
                                <Ionicons
                                    style={{ textAlign: 'center' }}
                                    name='fast-food-outline'
                                    size={55}
                                    color='#989898'
                                />
                            </View>
                        )}
                    </View>
                    <View >
                        <Text
                        style={{
                            alignSelf:"center",
                        }}
                        >
                            Upload your Dish pic*
                        </Text>
                        {image === null && (
                            <Text
                                style={{
                                    color: 'red',
                                    fontSize: 12,
                                    alignSelf: 'center',
                                }}
                            >
                                Image is compulsory
                            </Text>
                        )}
                    </View>
                </TouchableOpacity>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full text-[16px] pb-2 font-semibold text-black'
                    >
                        Title
                    </Text>
                    <TextInput
                        value={data.title}
                        onChangeText={(text) => {
                            setData({ ...data, title: text })
                        }}
                        keyboardType="email-address"
                        className='border-[1px] h-[50px] rounded-[8px] border-gray-400 w-full px-6'
                        placeholder='Event Title'
                    />
                </View>

                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full text-[16px] pb-2 font-semibold text-black'
                    >
                        Game Type
                    </Text>
                    <TextInput
                        value={data.game}
                        onChangeText={(text) => {
                            setData({ ...data, game: text })
                        }}
                        keyboardType="email-address"
                        className='border-[1px] h-[50px] rounded-[8px] border-gray-400 w-full px-6'
                        placeholder='Event Title'
                    />
                </View>

                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full text-[16px] pb-2 font-semibold text-black'
                    >
                        Description
                    </Text>
                    <TextInput
                        multiline
                        value={data.description}
                        onChangeText={(text) => {
                            setData({ ...data, description: text })
                        }}
                        secureTextEntry={true}
                        className='border-[1px] text-start h-[100px] rounded-[8px] border-gray-400 w-full px-6'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full text-[16px] pb-2 font-semibold text-black'
                    >
                        Rules
                    </Text>
                    <TextInput
                        multiline
                        value={data.rules}
                        onChangeText={(text) => {
                            setData({ ...data, rules: text })
                        }}
                        secureTextEntry={true}
                        className='border-[1px] text-start h-[100px] rounded-[8px] border-gray-400 w-full px-6'
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        data['image'] = image
                        dispatch(addEvents(data,setLoading))
                    }}
                    className='bg-primary w-[88%] self-center h-[50px] rounded-full justify-center items-center'
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
                                Add Events
                            </Text>
                    }
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}