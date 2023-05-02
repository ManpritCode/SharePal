

import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function RidingGear() {
    const items = [
        {
            title: "Knee Guards",
            image: require("../../Images/ridding/knee.png"),
            Discription: ""
        },
        {
            title: "Riding Boots by Orazo",
            image: require("../../Images/ridding/orazo.png"),
            Discription: "Ultra – comfy bounce back, Waterproof, Protects your ankle, heel & toes; Inner lacing system"
        },
        {
            title: "T100 Boots",
            image: require("../../Images/ridding/T100.png"),
            Discription: ""
        },
        {
            title: "Riding Boot Covers",
            image: require("../../Images/ridding/GoPro.png"),
            Discription: "stronger than polyester; treated with anti-skid properties"
        },
    ]
    const style = {
        height: 100,
        width: 50
    }
    return (
        <View style={Styles.Maincontainer}>
            <Text style={Styles.text}>Riding Gear</Text>
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