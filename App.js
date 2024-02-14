import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet,View, ScrollView, Text, TouchableOpacity, TextInput} from 'react-native';
import { SignIn } from './screen/signin-screen';
export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView>
    //     <View>
    //       <View style= {{backgroundColor: "orange", marginTop: "6%", padding: "4%", alignItems:"flex-end"}}>
    //      <Text style= {{color: "white", fontSize: 20}}>Todo</Text>
    //       <StatusBar style="auto"></StatusBar>
    //       </View>

    //       <View style= {{marginHorizontal: 25}}>
    //       <Text style= {{marginTop: 27, fontWeight: 'bold'}}>Todo list items</Text>
    //       <TouchableOpacity style= {{backgroundColor: "whitesmoke",borderStyle: "dotted", borderRadius: 7, borderWidth: 2, padding: 15, marginTop: 22}}>
    //         <Text style= {{fontWeight: 'bold'}}>1 Cleaning</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style= {{backgroundColor: "whitesmoke",borderStyle: "dotted", borderRadius: 7, borderWidth: 2, padding: 15, marginTop: 22}}>
    //         <Text style= {{fontWeight: 'bold'}}>1 Cleaning</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style= {{backgroundColor: "whitesmoke",borderStyle: "dotted", borderRadius: 7, borderWidth: 2, padding: 15, marginTop: 22}}>
    //         <Text style= {{fontWeight: 'bold'}}>1 Cleaning</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style= {{backgroundColor: "whitesmoke", borderStyle: "dotted", borderRadius: 7, borderWidth: 2, padding: 15, marginTop: 22}}>
    //         <Text style= {{fontWeight: 'bold'}}>1 Cleaning</Text>
    //       </TouchableOpacity>
    //       </View>

    //       <View style= {{flexDirection: "row", marginTop: "60%"}}> 
    //       <View style= {{backgroundColor: "whitesmoke",borderBottomWidth: 1,borderBottom: "black",width: "65%", marginLeft: "6%",borderRadius: 5}}>
    //         <TextInput style= {{paddingLeft: "6%", paddingTop: 5}}>Enter new todo item</TextInput>
    //       </View>
    //       <View>
    //         <TouchableOpacity style= {{backgroundColor: "darkorange",marginLeft: 15, padding: 13, borderRadius: 5}}>
    //           <Text style= {{color: "white"}}>Add todo</Text>
    //         </TouchableOpacity>
    //       </View>
    //       </View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>

<SignIn/>
    
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
