import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import axios from "axios";
import axiosIns, { baseURL } from "../src/Helper/Helper";
export const Init = (setloading) => {
    setloading(true)
    return async dispatch => {
    const access = await AsyncStorage.getItem("access")
    console.log(access)

        dispatch({
            type: 'LOGIN',
            payload: access,
        })
        setloading(false)
    }
}
export const LoginAction = (data, setLoading) => {
    console.log(data)
    setLoading(true)
    return async dispatch => {
        await axios.post(baseURL + "login/", data).then(async (res) => {
            console.log(res.data)
            await AsyncStorage.setItem("access",res.data.access)
            if (res.status == 200) {
                dispatch({
                    type:"LOGIN",
                    payload:res.data.access
                })
            }
            else {
                setLoading(false)
                Alert.alert("Invalid User Name or Password")
            }
        }).catch((err) => {
            console.log(err)
            Alert.alert("Invalid User Name or Password")
            setLoading(false)
        })
    }
}

export const RegisterAction = (data, setLoading,navigation) => {
    console.log(data)
    setLoading(true)
    return async dispatch => {
        await axios.post(baseURL + "signup/", data).then((res) => {
            console.log(res.data)
            if (res.status == 201) {
                navigation.navigate('Verify',{
                    email:data.email
                })
                setLoading(false)
            }
            else {
                setLoading(false)
                Alert.alert("hi")
            }
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            // Alert.alert("Something Went Wrong")
            setLoading(false)
        })
    }
}
export const VerifyAction = (data, setLoading,navigation) => {
    console.log(data)
    setLoading(true)
    return async dispatch => {
        await axios.post(baseURL + "verify/", data).then((res) => {
            console.log(res.status)
            if (res.status == 200) {
                Alert.alert('Verified', 'Account Verified Successfully', [
                    {text: 'Go to Login', onPress: () => {
                        navigation.replace("Login")
                    }},
                  ]);
                setLoading(false)
            }
            else {
                setLoading(false)
                Alert.alert("hi")
            }
            setLoading(false)
        }).catch((err) => {
            Alert.alert(err?.response?.data?.error)
            setLoading(false)
        })
    }
}

export const getMyEvents = (setLoading)=>{
    setLoading(true)
    return async dispatch => {
        await axiosIns.get(baseURL + "myevent/").then((res) => {
            console.log(res.data)
            if (res.status == 200) {
                dispatch({
                    type:"PARTI",
                    payload:res.data
                })
            }
            else {
                setLoading(false)
                Alert.alert("something went wrong")
            }
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            Alert.alert(err?.response?.data?.error)
            setLoading(false)
        })
    }
}

export const getEvents = (setLoading)=>{
    setLoading(true)
    return async dispatch => {
        await axios.get(baseURL + "event/").then((res) => {
            if (res.status == 200) {
                dispatch({
                    type:"EVENTS",
                    payload:res.data
                })
            }
            else {
                setLoading(false)
                Alert.alert("something went wrong")
            }
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            Alert.alert(err?.response?.data?.error)
            setLoading(false)
        })
    }
}

export const addParticipate = (id,setLoading)=>{
    setLoading(true)
    return async dispatch => {
        await axiosIns.post(`participate/${id}/`).then((res) => {
            if (res.status == 200) {
                Alert.alert(res?.data?.message)
            }
            else {
                setLoading(false)
                Alert.alert("something went wrong")
            }
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            Alert.alert(err?.response?.data?.message)
            setLoading(false)
        })
    }
}

export const removeParticipate = (id,setLoading)=>{
    setLoading(true)
    return async dispatch => {
        await axiosIns.post(`withdraw/${id}/`).then((res) => {
            if (res.status == 200) {
                Alert.alert(res?.data?.message)
            }
            else {
                setLoading(false)
                Alert.alert("something went wrong")
            }
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            Alert.alert(err?.response?.data?.message)
            setLoading(false)
        })
    }
}

export const getRanks = (setLoading,setData)=>{
    setLoading(true)
    return async dispatch => {
        await axios.get(`ranks/`).then((res) => {
            console.log(res.data)
            if (res.status == 200) {
                setData(res.data)
            }
            else {
                setLoading(false)
                Alert.alert("something went wrong")
            }
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            Alert.alert(err?.response?.data?.message)
            setLoading(false)
        })
    }
}



export const LogoutAction = () => {
    return async dispatch => {
        await AsyncStorage.clear()
        dispatch({
            type: 'LOGIN',
            payload: null ,
        })
    }
}