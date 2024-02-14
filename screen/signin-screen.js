import { SafeAreaView, StyleSheet,View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export function SignIn() {
    return (
    <View style= {{marginTop: "15%"}}>
        <AntDesign name='close' style= {{marginLeft: "4%"}}></AntDesign>
     <View style= {{alignItems: "center"}}>
        <Text style= {{fontWeight: "bold", fontSize: 23}}>Sign In</Text>
        <Text style= {{marginTop: "3%", color: "lightgray"}}>Welcome back! Please enter your details</Text>
     </View>
     

     <TextInput
     mode=''
     left={<TextInput.Icon icon={"email-outline"} />}
     label={"dfghjfg@gmail.com"}
     style= {{marginTop: "8%",backgroundColor: "whitesmoke", borderRadius: 10, marginHorizontal: 25}}></TextInput>

     <TextInput
     secureTextEntry
     mode=''
     left={<TextInput.Icon icon={"lock-outline"}/>}
     label={"Password"}
     style= {{marginTop: "5%", backgroundColor: "whitesmoke", borderRadius: 10, marginHorizontal: 25}}></TextInput>
       {/* <View style= {{marginHorizontal: 25, marginTop: "10%"}}>
     <View style= {{backgroundColor: "whitesmoke", borderRadius: 17, padding: 10, marginTop: 22, flexDirection: "row"}}>
        <FontAwesome name='envelope-o' style= {{paddingTop: "3%", }}></FontAwesome>
        <TextInput style= {{fontWeight: 'bold', paddingLeft: "6%"}}>uwerairakozealine@gmail.com</TextInput>
     </View>
     <View style= {{backgroundColor: "whitesmoke", borderRadius: 17, padding: 10, marginTop: 22, flexDirection: "row"}}>
        <AntDesign name='lock' style= {{paddingTop: "3%"}}></AntDesign>
     <TextInput style= {{fontWeight:'bold', paddingLeft: "6%"}}>.........</TextInput>
     </View>
     </View>  */}

     <View>
        <Text style= {{marginLeft: "11%", marginTop: "4%", fontWeight: 'bold'}}>Remember</Text>
     </View>

     <View style= {{marginTop: "28%", alignItems: "center"}}>
    <Text style= {{color: "#4db5ff"}}>Forgot Password</Text>
    <TouchableOpacity style= {{backgroundColor: "#038df0", marginTop: "6%", width: "88%", borderRadius: 22}}>
        <Text style= {{padding: 13, color: "white", textAlign: "center", fontWeight: "bold", }}>Sign In</Text>
    </TouchableOpacity>
     </View>
     <View style= {{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 25, marginTop: "5%"}}>
        <Text>Create account</Text>
        <TouchableOpacity style= {{backgroundColor: "whitesmoke",width: "21%", borderRadius: 10,}}>
            <Text style= {{color: "orange", padding: 3, fontWeight: "bold", textAlign: "center"}}>Sign Up</Text>
        </TouchableOpacity>
     </View>
     <View style= {{flexDirection: "row", justifyContent: "space-around", marginTop: "13%"}}>
        <Entypo name='facebook-with-circle' style= {{fontSize: 30, backgroundColor: "whitesmoke",borderRadius: 20, padding: 10}}></Entypo>
        <AntDesign name='google' style= {{fontSize: 25, backgroundColor: "whitesmoke",borderRadius: 20, padding: 10}}></AntDesign>
        <AntDesign name='apple1' style= {{fontSize: 30, backgroundColor: "whitesmoke",borderRadius: 20, padding: 10}}></AntDesign>
     </View>
     </View>
    )
}