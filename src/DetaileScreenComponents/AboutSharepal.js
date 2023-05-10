import { View, Text, StyleSheet, Image } from "react-native";
export default function AboutSharepal() {
    return (
        <View style={Styles.maincontainer}>
            <View style={Styles.Subcontainer}>
                <View style={Styles.itemcontainer1}>
                      
                    <Image source={require("../../Images/itemcontainer/thumb.png")} style={Styles.Image}></Image>
                    <Text>Excellent Quality Products</Text>
                </View>
                <View style={Styles.itemcontainer2}>
                <Image source={require("../../Images/itemcontainer/gift-box.png")} style={Styles.Image}></Image>
                    <Text style={{width:"40%",textAlign:"center",marginLeft:"5%"}}>Delivery Date & Return Date is FREE!!</Text>
                </View>
                <View style={Styles.itemcontainer3}>
                <Image source={require("../../Images/itemcontainer/cash-on-delivery.png")} style={Styles.Image}></Image>
                    <Text style={{ marginLeft:"14%"}}>Pay on Delivery</Text>
                </View>
            </View>

        </View>
    )
}
const Styles = StyleSheet.create({
    maincontainer: {
        height:300,
        width:"100%",
        alignItems: "center",
        justifyContent: "center"

    },
    Subcontainer: {
        width: "85%",
        height: "80%",
       

    },
    itemcontainer1: {
        borderBottomWidth: 1,
        height: "30%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "rgb(214,229,255)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'row'
    },
    itemcontainer2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'row',
        backgroundColor: "rgb(214,229,255)"
    },
    itemcontainer3: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        justifyContent:'center',
        alignItems: "center",
        flexDirection:'row',
        backgroundColor: "rgb(214,229,255)"

    },
    Image: {
        height: "60%",
        width: "20%",
        resizeMode: "contain"

    }
})