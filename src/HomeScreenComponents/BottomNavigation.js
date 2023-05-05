import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import {Dimensions} from 'react-native';
export default function BottomNavigation() {
   
    return (
        <View style={Styles.headcontainer}>
        <View style={Styles.maincontainer}>
            <View style={Styles.subcontainer}>
            
                <TouchableOpacity style={Styles.center}>
                <AntDesign name="appstore1" size={25} color="black" />
                <Text>categories</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.subcontainer}>
            
                <TouchableOpacity style={Styles.center}>
                <AntDesign name="layout" size={25} color="black" />
                <Text>Offers</Text>
 </TouchableOpacity>
            </View>
            <View style={Styles.subcontainer}>
                <TouchableOpacity style={Styles.center}>
                    <Fontisto name="search" size={25} color="black" />
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.subcontainer}>
            
                <TouchableOpacity style={Styles.center}>
                <Ionicons name="ios-videocam-sharp" size={25} color="black" />
                <Text>Video Trial</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.subcontainer}>
                <TouchableOpacity style={Styles.center}>
                    <FontAwesome5 name="users-slash" size={25} color="black" />
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
    
}

const Styles = StyleSheet.create({
 
    headcontainer:{
    

        width:"100%",
        borderTopWidth:1,
        alignItems:"center",
        
        
    },
    maincontainer: {
        height:50,
        
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: 'center',

        


    },
    subcontainer: {

        width: 80,
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    center:{
        alignItems:"center",
        justifyContent:"center"
    }
})