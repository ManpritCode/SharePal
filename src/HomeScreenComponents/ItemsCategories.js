import react from "react";
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native"

export default function ItemsCategories({navigation}) {

    const items = [
        {
            title: "Trekking Gear",
            image: require("../../Images/traking.png")
        },
        {
            title: "Riding Gear",
            image: require("../../Images/ridingGear.png")
        },
        {
            title: "Action Cameras",
            image: require("../../Images/actioncamera.png")
        },
        {
            title: "Cameras",
            image: require("../../Images/camera.png")
        },
        {
            title: "Gaming Console",
            image: require("../../Images/gaming.png")
        },
        {
            title: "PS4 Games",
            image: require("../../Images/ps5.png")
        },
        {
            title: "Winter Wear",
            image: require("../../Images/winter-wear.png")
        },
    ]

    return (
        <View style={Styles.Maincontainer}>
            <Text style={Styles.text}>What would you like to rent?</Text>
            {
                items.map((item, index) => (
                    <TouchableOpacity key={index} onPress={()=>{
                        navigation.navigate('detaile')
                    }}>
                    <View key={index} style={Styles.itemcontainer}>
                        <ImageBackground source={require('../../Images/items.png')}
                            style={{
                                height: "100%",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",

                            }} >

                            <Image source={item.image} style={{
                                height: 165,
                                width: 150,
                                top:15,
                                resizeMode: "cover"
                            }}>

                            </Image>
                            <Text style={Styles.itemtitle}>{item.title}</Text>
                        </ImageBackground>
                    </View>
                    </TouchableOpacity>
                ))
            }
        </View>
    )

}

const Styles = StyleSheet.create({
    Maincontainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "white",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "center",

    },
    text: {
        fontSize: 23,
        fontWeight: "500",
        marginTop: 20
    },
    itemcontainer: {
        backgroundColor: "white",
        height: 190,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        marginHorizontal: 20,
        marginTop: 20,
        elevation: 9,
        shadowColor: '#52006A',

    },
    itemtitle: {
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",

    }
})