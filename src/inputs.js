import React, {Component, useState} from "react";
import { TextInput,Text, View, TouchableOpacity, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function Inputs() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [message, setMessage] = useState('')

    const handleEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setEmailError("Email is Not Correct")
        }
        else {
            setEmail({ email: text })
            setEmailError("")
        }
    }
    const handlePassword = (text) => {
        setPassword({password: text})
    }
    const login = () => {
        console.log(email, password)
        setMessage(`Your email is: ${email} and your password is: ${password.toString()}`)
    }

   
        return(
            <View style = {styles.container}>
                <View style={styles.row}>
                    <TextInput 
                        style = {styles.input}
                        placeholder = "Email"
                        placeholderTextColor="black"
                        autoCapitalize="none"
                        underlineColorAndroid="transparent"
                        onChangeText = {(text) => handleEmail(text)}

                    />
                </View>
                    <Text style={styles.textError}>{emailError}</Text>
                <View style={styles.row}>
                    <TextInput 
                        style ={styles.input}
                        placeholder = "Password"
                        underlineColorAndroid="transparent"
                        placeholderTextColor="black"
                        autoCapitalize="none"
                        onChangeText = {(text) => handlePassword(text)}
                        secureTextEntry = {isPasswordVisible}
                    />
                        <Text style={styles.icon} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                            {!isPasswordVisible ? (
                                <Icon name="eye-slash" size={20} color="#900" />
                            ) : 
                            (
                                <Icon name="eye" size={20} color="#900" />
                            )
                            }
                        </Text>
                    
                </View>    
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress={()=> login()}
                    >
                        <Text style = {styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>

                <Text>{message && message}</Text>
            </View>
        )
    }


export default Inputs

const styles = StyleSheet.create({
    container:{
        paddingTop:23,
        alignItems:'center',
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        margin:10,
        height:40,
        gap: 5,
        borderColor:'black',
        borderWidth:1,
        width:300,
    },
    input:{
        flex: 1,
        paddingLeft:5,
        borderColor:'transparent',
        borderWidth:0,
    },
    icon: {
        width: 50,
    },
    submitButton:{
        backgroundColor:'black',
        padding:10,
        margin:25,
        height:40,
    },
    submitButtonText:{
        color:'white',
        textAlign:'center'
    },
    textError:{        
        color:'red',
        textAlign:'left',
    }
})