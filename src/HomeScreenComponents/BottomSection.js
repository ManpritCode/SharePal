import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function BottomSection() {
    return (
        <View style={Styles.maincontainer}>
            <View style={Styles.subcontainer}>
                <View style={Styles.sharepal}><Text style={Styles.headingtext}>SharePal</Text></View>
                <View style={Styles.categories}>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>About us </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>Why SharePal ? </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>Careers </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>Blogs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>Sitemaps</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={Styles.subcontainer}>
                <View style={Styles.information}><Text style={Styles.headingtext}>Information</Text></View>
                <View style={Styles.categories}>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>How it works</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>FAQs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>Verification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>Refund Process</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>Cancellation Policy</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={Styles.subcontainer}>
                <View style={Styles.policies}><Text style={Styles.headingtext}>Policies</Text></View>
                <View style={Styles.categories}>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>Rental Terms & Condition</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>Shipping policy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>Damage Policy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>Terms of Use</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Styles.categoriesText}>Privacy Policy</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={Styles.subcontainer1}>
                <View style={Styles.needhelp}><Text style={Styles.headingtext}>Need Help</Text></View>
                <View style={Styles.categories}>
                  
                    <TouchableOpacity style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Feather name="phone-call" size={15} color="white"  style={{marginHorizontal:10}}/>
                        <Text style={Styles.categoriesText}>+91 76192 20543</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Feather name="mail" size={20} color="white" style={{marginHorizontal:10}} />
                        <Text style={Styles.categoriesText}>care@sharepal.in</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:100,width:200,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                <FontAwesome name="facebook" size={40} color="white" />
                <Entypo name="instagram" size={40} color="white" />
                <AntDesign name="linkedin-square" size={40} color="white" />
                </View>
            </View>

        </View>
    )
}
const Styles = StyleSheet.create({
    maincontainer: {
        

        backgroundColor: "rgb(55,55,55)",
        alignItems: "center",
        justifyContent: "center"
    },
    subcontainer: {
        height: 270,
        width: 350,
    },
    headingcontainer: {

        height: 50,
        width: 130,
        borderBottomColor: "rgb(215,223,35)",

        marginVertical: 20

    },
    categories: {

        
        alignItems:"flex-start",
        justifyContent: "space-around"
    },
    headingtext: {
        color: "white",
        fontSize: 25,
        fontWeight: "300",
        textAlign: "left",

    },
    categoriesText: {
        marginVertical:8,
        color: "white",
        fontSize: 15,
        fontWeight: "300"
    },
    sharepal: {
        width: 100,
        paddingVertical: 10,
        borderBottomColor: "rgb(215,223,35)",
        borderBottomWidth: 5,
        color: "white",
        fontSize: 25,
        fontWeight: "300",
        textAlign: "left",
    },
    information: {
        width: 130,
        paddingVertical: 10,
        borderBottomColor: "rgb(215,223,35)",
        borderBottomWidth: 5,
        color: "white",
        fontSize: 25,
        fontWeight: "300",
        textAlign: "left",
    },
    policies: {
        width: 90,
        paddingVertical: 10,
        borderBottomColor: "rgb(215,223,35)",
        borderBottomWidth: 5,
        color: "white",
        fontSize: 25,
        fontWeight: "300",
        textAlign: "left",
    },
    needhelp: {
        width: 119,
        paddingVertical: 10,
        borderBottomColor: "rgb(215,223,35)",
        borderBottomWidth: 5,
        color: "white",
        fontSize: 25,
        fontWeight: "300",
        textAlign: "left",

    },
    subcontainer1: {
        
        width:"84%",
        
        height:250,
        
        marginBottom: 50,
        


    }
})