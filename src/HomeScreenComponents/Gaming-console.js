
import react from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function Gaming_Console() {
    const items = [
        {
            title: "PS5+FIFA with 2remote-controler",
            image: require("../../Images/GamingConsole/ps5-console-with-2-controllers.png"),
            Discription: "Easy to connect, share & play with friends"
        },
        {
            title: "PSF Controller on rent",
            image: require("../../Images/GamingConsole/gaming-console-PS5-controller.png"),
            Discription: ""
        },
        {
            title: "Rent PS4 Console w/1",
            image: require("../../Images/GamingConsole/ps4-console-on.png"),
            Discription: ""
        },
        {
            title: "PS4 Controller on rent",
            image: require("../../Images/GamingConsole/ps4-controller-on-remote.png"),
            Discription: "Easy to connect, share & play with friends"
        },
        {
            title: "Xbox Controller on rent",
            image: require("../../Images/GamingConsole/xbox_controller.png"),
            Discription: "Stronger than polyester; treated with anti-skid properties"
        },
        {
            title: "Xbox Series S w/2aaa",
            image: require("../../Images/GamingConsole/xbox-series.png"),
            Discription: "Stronger than polyester; treated with anti-skid properties"
        },
        {
            title: "PSF Controller on rent",
            image: require("../../Images/GamingConsole/gaming-console-PS5-controller.png"),
            Discription: ""
        },
        {
            title: "Rent PS4 Console w/1",
            image: require("../../Images/GamingConsole/ps4-console-on.png"),
            Discription: "Easy to connect, share & play with friends"
        },
    ]
    const style = {
        height: 100,
        width: 50
    }
    return (
        <View style={Styles.Maincontainer}>
            <Text style={Styles.text}>Gaming Console</Text>
            <ScrollView horizontal={true} persistentScrollbar={true} >
                {
                    items.map((item, index) => (
                        <View key={index} style={Styles.itemcontainer}>
                            <View style={{
                                flexDirection: "row", justifyContent: "space-around"
                            }}>
                                <Image source={item.image} style={Styles.Image}>

                                </Image>
                                <View style={Styles.SideViewContainer}>
                                    <Entypo name="heart-outlined" size={24} color="grey" />
                                    <MaterialCommunityIcons name="share-variant" size={20} color="grey" />
                                </View>
                            </View>
                            <View style={{ alignSelf: "center", margin: 5 }}>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={Styles.itemtitle}>{item.title}</Text>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={Styles.discription}>{item.Discription}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
const Styles = StyleSheet.create({
    Maincontainer: {

        height: 300
    },
    text: {
        fontSize: 23,
        fontWeight: "500",
        marginTop: 20,
        textAlign: "center"
    },
    itemcontainer: {
        height: 190,
        width: 200,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        marginHorizontal: 10,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 15,
        elevation: 9,
        shadowColor: '#52006A',
    },
    itemtitle: {
        fontSize: 15,
        fontWeight: "400",
        textAlign: "left",

    },
    discription: {
        textAlign: "left",
        fontSize: 10,
        color: "grey"
    },
    Image: {
        height: 100,
        width: 100,
        marginTop: 10,
        resizeMode: "cover"
    },
    SideViewContainer: {
        height: 50,
        width: 25,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        left: 25
    }
})