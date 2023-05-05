import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Fontisto } from '@expo/vector-icons';
export default function Paragraph() {
    var items = useSelector(state => state)
    const [visible, setvisble] = useState(true)

    const contentText = [
        {
            headline: "GoPro camera rental in ",
            Paragraph: "SharePal offers various models of GoPro camera for rent such as GoPro Hero 5, Hero 7, Hero 8, and Hero 9 on rent. Apart from this we also provide several accessories and mounts for GoPro as per your need."
        },
        {
            headline: "DSLR camera rental in",
            Paragraph: "SharePal offers the best models of DSLR camera for rent at an affordable price. Canon 1500D, Nikon D3500, Nikon D5600 models are available to rent starting Rs 399/Day."
        },
        {
            headline: "Trekking Gear on rent in",
            Paragraph: "SharePal provides all the trekking equipment on rent. You can rent trekking shoes, trekking jackets, trek accessories like trekking poles, head torch, and even hiking sunglasses. The trekking gear we rent is in excellent condition and is 100% clean & hygienic."
        },
        {
            headline: "Riding Gear on rent in",
            Paragraph: "Planning a bike trip, rent all the riding gear essentials for a fraction of its purchase cost. You can rent riding jackets, riding boots, riding gloves and even riding pants from SharePal. The riding gear we rent is in excellent condition and is 100% clean & hygienic."
        },
        {
            headline: "Gaming Console on rent in",
            Paragraph: "Having an off day or just wanting to kill boredom. SharePal is the best place for renting gaming consoles at the lowest price. You can rent a PS4 console or Xbox console for as little as Rs 3499 a month."
        },
    ]
    const secondcontainer = [
        {
            heading: "Quality Products:",
            Paragraph: "Every product you rent is fully functional & in excellent condition"
        },
        {
            heading: "Simple Pricing",
            Paragraph: " Daily, weekly & monthly rental plans. Rent longer, Payless"
        },
        {
            heading: "Quick & Hassle-free:",
            Paragraph: "Simply order online & relax. Enjoy doorstep delivery & pick-up."
        },
        {
            heading: "Pay on Delivery:",
            Paragraph: "Just pay 10% advance & reserve. Pay the balance upon delivery."
        },
        {
            heading: "Customer Friendly:",
            Paragraph: "Friendly & customer-centric team to help every step of the way."
        },
        {
            heading: "Safe & Sanitised:",
            Paragraph: "Enjoy a safe & pleasant renting experience, always."
        },
    ]
    const [text1, settext1] = useState("Read more")
    const handle1 = () => {
        if (text1 == "Read more") {
            settext1("Read less")
        } else {
            settext1("Read more")
        }
    }

    const handleclick = () => {
        if (visible == true) {
            setvisble(false)
        } else {
            setvisble(true)
        }
    }


    return (
        <View style={Styles.maincontainer}>
            {
                visible ? (
                    <>
                        <View style={Styles.heading}>
                            <Text style={Styles.text}>Welecome to Sharepal {items.cityname} </Text>
                        </View>
                        <Text style={{
                            textAlign: "justify", padding: 15,
                            fontSize: 12, lineHeight: 20
                        }}>
                            {items.disscripstion}

                        </Text>

                    </>
                ) : (
                    <>
                        <View style={Styles.heading}>
                            <Text style={Styles.text}>Welecome to Sharepal {items.cityname} </Text>
                        </View>
                        <Text style={{
                            textAlign: "justify", padding: 15,
                            fontSize: 12, lineHeight: 20
                        }}>
                            {items.disscripstion}
                        </Text>

                        <View style={{ flex: 1 }}>
                            <View style={{ padding: 20 }}>
                                <View style={{ height: "8%" }}>
                                    <Text style={{ fontWeight: "600", fontSize: 18, lineHeight: 22 }}>Rent  Travel Gear, GoPro,DSLR camera, and Gaming consoles in {items.cityname}</Text>
                                </View>
                                {
                                    contentText.map((item, index) => (
                                        <View key={index} style={{ marginVertical: 10, width: 380, }} >
                                            <Text style={{ color: "blue", fontWeight: "500", textAlign: "justify" }}>
                                                {item.headline} {items.cityname}:
                                                <Text style={{ color: "black", lineHeight: 15, fontSize: 12, fontWeight: "400", }}>
                                                    {item.Paragraph}
                                                </Text>


                                            </Text>
                                        </View>
                                    ))
                                }
                                <View style={{ height: "6%" }}>
                                    <Text style={{ fontWeight: "600", fontSize: 18, lineHeight: 22 }}>Renting is good, but it's even better when you rent from us</Text>
                                </View>
                                <View>
                                    {
                                        secondcontainer.map((item, index) => (
                                            <View key={index} style={{ marginVertical: 10, width: 380, }} >
                                                <Text style={{ color: "black", fontWeight: "500", textAlign: "justify" }}>
                                                    {item.heading}
                                                    <Text style={{ color: "black", lineHeight: 15, fontSize: 12, fontWeight: "400", }}>
                                                        {item.Paragraph}
                                                    </Text>
                                                </Text>

                                            </View>
                                        ))
                                    }


                                </View>
                            </View>

                        </View>

                    </>

                )


            }
            <TouchableOpacity onPress={() => {
                handle1();
                handleclick();
            }}>
                <View style={Styles.button}>
                    <Text style={{ fontSize: 15 }}>{text1}</Text>
                    <Fontisto name="arrow-right-l" size={15} color="black" />
                </View>

            </TouchableOpacity>
        </View>


    )
}

const Styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        
        flexDirection: "column",
        backgroundColor: 'rgb(244,247,250)'
    },
    heading: {
        height: 70,
        width: "100%",

        padding: 20
    },
    text: {

        fontSize: 22,

    },
    button: {
        flexDirection: "row",
        width: 130,
        height:100,
        
        flex: 1,
        padding: 20,
        borderBottomWidth: 0.8,
        alignItems: "center",
        justifyContent: "space-around"
    }
})