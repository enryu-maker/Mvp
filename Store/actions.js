import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import axios from "axios";
import axiosIns, { baseURL } from "../src/Helper/Helper";
export const Init = (setloading) => {
    setloading(true)
    return async dispatch => {
        const access = await AsyncStorage.getItem("access")
        const is_teacher = JSON.parse(await AsyncStorage.getItem("is_teacher"))

        dispatch({
            type: 'LOGIN',
            payload: {
                access: access,
                is_teacher: is_teacher,
            }
        })
        setloading(false)
    }
}
export const LoginAction = (data, setLoading, type) => {
    setLoading(true)
    return async dispatch => {
        await axios.post(baseURL + 'auth/login/', data).then(async (res) => {
            await AsyncStorage.setItem("access", res.data.token["access"])
            await AsyncStorage.setItem("is_teacher", JSON.stringify(res.data.is_teacher));
            if (res.status == 200) {
                dispatch({
                    type: "LOGIN",
                    payload: {
                        access: res?.data?.token["access"],
                        is_teacher: res.data.is_teacher,
                    }
                })
            }
            else {
                setLoading(false)
                Alert.alert("Invalid User Name or Password")
            }
        }).catch((err) => {
            console.log(err.response.data.msg)
            Alert.alert("Invalid User Name or Password")
            setLoading(false)
        })
    }
}

export const RegisterAction = (data, setLoading, navigation, type) => {
    setLoading(true)
    return async dispatch => {
        await axios.post(baseURL + `auth/${type ? "teacher-register/" : "student-register/"}`, data).then((res) => {
            if (res.status == 201) {
                navigation.navigate('Verify', {
                    email: data.email,
                    type: type
                })
                setLoading(false)
            }
            else {
                setLoading(false)
                Alert.alert("Something Went Worng")
            }
            setLoading(false)
        }).catch((err) => {
            Alert.alert("Something Went Wrong")
            setLoading(false)
        })
    }
}
export const VerifyAction = (data, setLoading, navigation, type) => {
    setLoading(true)
    return async dispatch => {
        await axios.post(baseURL + "auth/verify/", data).then((res) => {
            if (res.status == 200) {
                Alert.alert('Verified', 'Account Verified Successfully', [
                    {
                        text: 'Go to Login', onPress: () => {
                            navigation.replace("Login", {
                                type: type
                            })
                        }
                    },
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


export const getMyEvents = (setLoading) => {
    setLoading(true)
    return async dispatch => {
        await axiosIns.get(baseURL + "participants/my-events/").then((res) => {
            if (res.status == 200) {
                dispatch({
                    type: "PARTI",
                    payload: res.data
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

export const getMyTEvents = (setLoading) => {
    setLoading(true)
    return async dispatch => {
        await axiosIns.get(baseURL + "event/created-events/").then((res) => {
            (res.data)
            if (res.status == 200) {
                dispatch({
                    type: "EVENTT",
                    payload: res.data
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

export const getSubEvents = (setLoading, eventId) => {
    setLoading(true)
    return async dispatch => {
        await axiosIns.get(baseURL + `event/main-event/${eventId}/sub-events/`).then((res) => {
            if (res.status == 200) {
                dispatch({
                    type: "SUB",
                    payload: res.data
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


export const getEvents = (setLoading) => {
    setLoading(true)
    return async dispatch => {
        await axiosIns.get(baseURL + "event/main-events/").then((res) => {
            if (res.status == 200) {
                dispatch({
                    type: "EVENTS",
                    payload: res.data
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

export const getClgs = (setLoading) => {
    setLoading(true)
    return async dispatch => {
        await axios.get(baseURL + "event/college/").then((res) => {
            if (res.status == 200) {
                dispatch({
                    type: "CLG",
                    payload: res.data
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

export const addParticipate = (id, setLoading) => {
    console.log(id)
    setLoading(true)
    return async dispatch => {
        await axiosIns.post(`participants/participate/`, {
            "event_id": id
        }).then((res) => {
            if (res.status == 201) {
                Alert.alert(res?.data?.msg)
            }
            else {
                setLoading(false)
                Alert.alert("something went wrong")
            }
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            Alert.alert(err?.response?.data?.msg)
            setLoading(false)
        })
    }
}

export const addEvents = (data, setLoading) => {
    setLoading(true)
    const formdata = new FormData();
    for (const [key, value] of Object.entries(data)) {
        formdata.append(key, value);
    }
    return async dispatch => {
        await axiosIns.post(`event/main-event/1/create-subevent/`, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then((res) => {
            if (res.status == 201) {
                Alert.alert(res?.data?.msg)
            }
            else {
                setLoading(false)
                Alert.alert("something went wrong")
            }
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            Alert.alert(err?.response?.data?.msg)
            setLoading(false)
        })
    }
}

export const removeParticipate = (id, setLoading) => {
    setLoading(true)
    return async dispatch => {
        await axiosIns.post(`participants/withdraw/${id}/`).then((res) => {
            if (res.status == 200) {
                Alert.alert(res?.data?.msg)
            }
            else {
                setLoading(false)
                Alert.alert("something went wrong")
            }
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            Alert.alert(err?.response?.data?.msg)
            setLoading(false)
        })
    }
}

export const getRanks = (setLoading, setData) => {
    setLoading(true)
    return async dispatch => {
        await axios.get(`ranks/`).then((res) => {
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
            Alert.alert(err?.response?.data?.msg)
            setLoading(false)
        })
    }
}



export const LogoutAction = () => {
    return async dispatch => {
        await AsyncStorage.clear()
        dispatch({
            type: 'LOGOUT',
        })
    }
}