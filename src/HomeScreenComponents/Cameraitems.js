
import react from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function Camera_Items() {
    const items = [
        {
            title: "Men Trek Pant",
            image: require("../../Images/Cameras/canon-ef.png"),
            Discription: "Stronger than polyester; treated with anti-skid properties"
        },
        {
            title: "Riding Gear",
            image: require("../../Images/Cameras/canon-M50.png"),
            Discription: "Stronger than polyester; treated with anti-skid properties"
        },
        {
            title: "Men Trek Pant",
            image: require("../../Images/Cameras/canon.png"),
            Discription: "Stronger than polyester; treated with anti-skid properties"
        },
        {
            title: "Riding Gear",
            image: require("../../Images/Cameras/microfone.png"),
            Discription: "Stronger than polyester; treated with anti-skid properties"
        },
        {
            title: "Men Trek Pant",
            image: require("../../Images/Cameras/tripod.png"),
            Discription: "Stronger than polyester; treated with anti-skid properties"
        },
        {
            title: "Riding Gear",
            image: require("../../Images/Trekking/womanpeck.png"),
            Discription: "Stronger than polyester; treated with anti-skid properties"
        },
        {
            title: "Men Trek Pant",
            image: require("../../Images/Trekking/pent.png"),
            Discription: "Stronger than polyester; treated with anti-skid properties"
        },
        {
            title: "Men Trek Pant",
            image: require("../../Images/Trekking/clip-glass.png"),
            Discription: "Stronger than polyester; treated with anti-skid properties"
        },
    ]
    const style = {
        height: 100,
        width: 50
    }
    return (
        <View style={Styles.Maincontainer}>
            <Text style={Styles.text}>Cameras</Text>
            <ScrollView horizontal={true} persistentScrollbar={true} >
                {
                    items.map((item, index) => (
                        <View key={index} style={Styles.itemcontainer}>
                            <View style={{
                                flexDirection: "row", justifyContent: "space-around"
                            }}>
                                <Image source={item.image} style={{
                                    height: 100,
                                    width: 100,
                                    marginTop: 10,
                                    resizeMode: "cover"
                                }}>
                                </Image>
                                <View style={{ height: 50, width: 25, flexDirection: "column", alignItems: "center", justifyContent: "space-around", left: 25 }}>
                                    <Entypo name="heart-outlined" size={25} color="grey" />
                                    <MaterialCommunityIcons name="share-variant" size={20} color="grey"/>
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
    }
})