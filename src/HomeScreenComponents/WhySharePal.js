import { View, Text, StyleSheet, Image } from "react-native";

export default function WhySharePal() {

    const Items = [
        {
            Image: require("../../Images/WhySharePal/qouilty.png"),
            title: "Quality Product",
            disscription: "Every product you rent is fully functional & in excellent condition."
        },
        {
            Image: require("../../Images/WhySharePal/Simple.png"),
            title: "Simple Pricing",
            disscription: "Daily, weekly & monthly rental plans. Rent longer, Pay lesser:)"
        },
        {
            Image: require("../../Images/WhySharePal/hassle.png"),
            title: "Quick & Hassle-free",
            disscription: "Simply order online & relax. Enjoy doorstep delivery & pick-up."
        },
        {
            Image: require("../../Images/WhySharePal/Delvery.png"),
            title: "Pay on Delivery",
            disscription: "Just pay 10% advance & reserve. Pay the balance upon delivery."
        },
        {
            Image: require("../../Images/WhySharePal/customers.png"),
            title: "Customer Friendly",
            disscription: "Friendly & customer-centric team to help every step of the way."
        },
        {
            Image: require("../../Images/WhySharePal/Safe.png"),
            title: "Safe & Sanitised",
            disscription: "Enjoy a safe & pleasant renting experience, always."
        },
    ]

    return (

        <View style={Styles.maincontainer}>
            <View style={Styles.textcontainer}>
                <Text style={Styles.text1}>Why SharePal</Text>
            </View>
            {
                Items.map((item, index) => (
                    
                        <View key={index} style={Styles.subcontainer}>
                            <View style={Styles.imagecontainer}>
                                <Image source={item.Image} style={{ height: 80, width: 75, resizeMode: "contain", }}></Image>
                            </View>
                            <View key={index} style={Styles.textcontainer2}>
                                <Text style={{ color: "rgb(87,87,150)", fontWeight: '500' }}>{item.title}</Text>
                                <Text style={Styles.text3}>{item.disscription}</Text>
                            </View>
                        </View>
                    
                ))
            }

        </View>

    )
}
const Styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: "rgb(245,247,250)",
        width: "100%",
        height: 800,
        alignItems: "center",
        justifyContent: 'space-around'
    },
    textcontainer: {
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    text1: {
        fontSize: 25,
        fontWeight: "400"
    },
    subcontainer: {
        height: 100,
        width: 390,
        backgroundColor: "white",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        elevation: 9,
        shadowColor: '#52006A',
    },
    imagecontainer: {
        height: 70,
        width: 70,
        alignItems: "center",
        justifyContent: "center"

    },
    textcontainer2: {
        height: 70,
        width: 180,
        alignItems: "center",
        justifyContent: "space-around",
        right: 20
    },
    text3: {
        fontSize: 10,
        textAlign: "center",
        color: "grey",
        lineHeight: 15
    }
})