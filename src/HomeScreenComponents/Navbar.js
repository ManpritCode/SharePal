import react, { useState } from "react";
import * as React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { View, Text, StyleSheet, Platform, StatusBar, Image, Modal } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { pickdata } from "../../redux/actiontype";
import { pickdatatoSelectCity } from "../../redux/action/action";

const Navbar = () => {
    const a = "Raipur"
    const [visible, setVisible] = useState(false);
    const [selectCity, setselectCity] = useState(a)
    const handlePress = () => {
        setVisible(true);
    };
    const handleClose = () => {
        setVisible(false);
    };
    
    const city = [
        {
            cityname: "Bangalore",
            disscripstion:'Bengaluru, the silicon valley of India is also a start-up hub. SharePal is \n a rental startup for all your lifestyle needs. Be it travel, photography,\n entertainment or fitness, you can rent all the latest products.\nSharepal is a leading rental platform with a pan India presence. We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Bangalore.Sharepal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures.Our services cover all of Bangalore, some of which are Koramangala, Indiranagar, Marathahalli, Whitefield, Rajajinagar, HSR Layout, BTM Layout, Electronic City, Jayanagar, Aecs Layout, Kundalahalli, K R Puram, Richmond Town, Mahadevapura, Hebbagodi, Ayyappa Nagar, J P Nagar, and even faraway places like Yeshwantpur and Yelahanka.We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Bangalore.Sharepal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures.Our services cover all of Bangalore, some of which are Koramangala, Indiranagar, Marathahalli, Whitefield, Rajajinagar, HSR Layout, BTM Layout, Electronic City, Jayanagar, Aecs Layout, Kundalahalli, K R Puram, Richmond Town, Mahadevapura, Hebbagodi, Ayyappa Nagar, J P Nagar, and even faraway places like Yeshwantpur and Yelahanka.'
        },
        {
            cityname: "Munmbai",
            disscripstion:'The city of Mumbai is a hub of the richest business tycoons of India.SharePal is a rental startup for all your lifestyle needs. Be it travel, photography, entertainment or fitness, you can rent all the latest products.Sharepal is a leading rental platform with a pan India presence. We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Mumbai.Sharepal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures.We offer rental services all over Mumbai, including localities such as Navi Mumbai, Thane, Kharghar, Andheri, Mira Road, Bandra, Powai, Parel, Santacruz, Mulund, Dombivli, Chembur, Borivali, kandivali, Malad, Vashi, Dahisar, Kasarvadavali, Boisar, GTB Nagar, Vikhroli and more.'
        },
        {
            cityname: "Delhi",
            disscripstion:'People of all ages can enjoy Delhi as it has something for everyone to complement their interests.SharePal is a rental startup for all your lifestyle needs. Be it travel, photography, entertainment or fitness, you can rent all the latest products.SharePal is a leading rental platform with a pan-India presence. We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Delhi.SharePal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures.We offer rental services all over Delhi, including localities such as South Delhi, Dwarka, Rohini, Shahdara, Saket, Karol Bagh, Anand Vihar, Chattarpur, Mayur Vihar, Laxmi Nagar, Malviya Nagar, Indirapuram, New Ashok Nagar, Kalkaji, and more.'
        },
        {
            cityname: "Gurgoun",
            disscripstion:'People of all ages can enjoy Delhi as it has something for everyone to complement their interests.SharePal is a rental startup for all your lifestyle needs. Be it travel, photography, entertainment or fitness, you can rent all the latest products.SharePal is a leading rental platform with a pan-India presence. We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Delhi.SharePal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures.We offer rental services all over Delhi, including localities such as South Delhi, Dwarka, Rohini, Shahdara, Saket, Karol Bagh, Anand Vihar, Chattarpur, Mayur Vihar, Laxmi Nagar, Malviya Nagar, Indirapuram, New Ashok Nagar, Kalkaji, and more.'
        },
        {
            cityname: "Noida",
            disscripstion:'Noida, a place of industrial development and it’s hub for multinational companies.SharePal is a rental startup for all your lifestyle needs. Be it travel, photography, entertainment or fitness, you can rent all the latest products.SharePal is a leading rental platform with a pan India presence. We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Noida. SharePal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures. We offer rental services all over Noida, including localities such as Greater Noida, Vaishali, Noida extension, Ghaziabad, Indirapuram, Vasundhara, Sahibabad, Noida Sector 135, New Ashok Nagar, Noida Sec 52, Noida Sector 62, Noida Sector 44, Noida Sector 45, Noida Sector 22, Noida Sector 137, Noida Sector 71, Noida Sector 74, Noida Sector 75, Noida Sector 76, Noida Sector 78 and more.'
        },
        {
            cityname: "Hyderabad",
            disscripstion:'Hyderabad is a growing startup hub, and one of India s leading trade centers. SharePal is a rental startup for all your lifestyle needs. Be it travel, photography, entertainment or fitness, you can rent all the latest products.SharePal is a leading rental platform with a pan-India presence. We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Hyderabad.SharePal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures.We offer rental services all over Hyderabad, including localities such as Kondapur, Gachibowli, Lingampally, Kukatpally, Banjara Hills, Jubilee Hills, or anywhere else.'
        },
        {
            cityname: "Ahmedabad",
            disscripstion:'Ahmedabad is a well-known place for cotton textile centers in India.SharePal is a rental startup for all your lifestyle needs. Be it travel, photography, entertainment or fitness, you can rent all the latest products.SharePal is a leading rental platform with a pan-India presence. We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Ahmedabad.SharePal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures. We offer rental services all over Ahmedabad, including localities such as SG Highway, Prahlad Nagar, Gota, Bodakdev, Chandkheda, Mani Nagar, Thaltej, Bopal and South Bopal, Sabarmati, and more.'
        },
        {
            cityname: "Pune",
            disscripstion:'Pune is well known as the educational hub of India.SharePal is a rental startup for all your lifestyle needs. Be it travel, photography, entertainment or fitness, you can rent all the latest products.SharePal is a leading rental platform with a pan India presence. We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Pune.SharePal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures.We offer rental services all over Pune, including localities such as Kothru, Kalyani Nagar, Viman Nagar, Hinjewadi, Koregaon Park, Aundh, Shivaji Nagar, Baner, Kondhwa, Pimpri-Chinchwad, Yerwada or anywhere else.'
        },
        {
            cityname: "Channai",
            disscripstion:'Chennai, one of the best cities to live in India. It’s a city which is well known for its culture and south Indian cuisine. SharePal is a rental startup for all your lifestyle needs. Be it travel, photography, entertainment or fitness, you can rent all the latest products.SharePal is a leading rental platform with a pan-India presence. We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Chennai.SharePal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures.We offer rental services all over Chennai including the places such as Mylapore, Velacheri, Perambur, Guindy, Egmore, Mambalam, Royapettah,T.Nagar, Nungambakkam, Koyambedu,Meenambakkam or anywhere else in Chennai.'
        },
        {   cityname:"Dehradoon",
            disscripstion: "SharePal is a rental startup for all your lifestyle needs. Be it travel, photography, entertainment or fitness, you can rent all the latest products.Sharepal is a leading rental platform with a pan India presence. We offer Trekking Gear, Riding Gear, DSLR Camera, GoPro Camera, PS4 Console, Xbox Console, PS4 Games on rent in Dehradun.Sharepal makes it easier for you to rent from us. All you need to do is choose the product whatever you need, add them to your cart, and check out. Rental products will be delivered to your home with full safety measures.Our services cover all of Dehradun, some of which are Dehradun Railway Station, Dehradun ISBT, Patel Nagar.",
        },

    ]

      const dispatch = useDispatch()
        const adddata = (item) =>{
            // console.log(item)
            dispatch(pickdatatoSelectCity(item))
        }
     

    return (
        <>
            <Modal visible={visible} transparent onRequestClose={handleClose}>
                <View style={Styles.ModalContainer}>
                    <View style={Styles.ModalSubContainer}>
                        <View style={Styles.SelectCountryTitle}>
                            <Text style={Styles.CountryTitleText}>Select Your City</Text>
                        </View>
                        <ScrollView style={{ flex: 1 }}>
                            <View style={Styles.Dropdown}>
                                {
                                    city.map((item, index) => (
                                        <TouchableOpacity key={index} onPress={() => {
                                            handleClose()
                                            setselectCity(item.cityname)
                                            adddata(item)
                                            
                                        }} style={Styles.CityContainer}>
                                            <Text>{item.cityname}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </View>

                </View>
            </Modal>

            <View style={Styles.Navbarcontainer}>
                <View style={Styles.Navbarsubcontainer}>
                    <Image
                        style={Styles.Navimage}
                        source={{
                            uri: 'data:image/png;base64,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',
                        }}
                    />
                    <Text style={Styles.Navtext}>SharePal</Text>
                    <TouchableOpacity onPress={handlePress} style={Styles.PlaceContainer}>
                        <Text style={Styles.NavPlaceText}>{selectCity}</Text>
                        <AntDesign name="down" size={15} color="black" style={{ top: 4, marginHorizontal: 10 }} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.NavUser}>
                    <FontAwesome name="user" size={30} color="blue" style={{ marginRight: 10 }} />
                </View>

            </View>


        </>
    )
}

const Styles = StyleSheet.create({

    Navbarcontainer: {
        height: 60,

        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        flexDirection: "row",
        marginTop: 25


    },
    Navbarsubcontainer: {

        width: 240,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    Navimage: {
        height: 40,
        width: 40,
        margin: 20
    },
    Navtext: {
        fontSize: 25,
        fontWeight: "300",
        marginHorizontal: 10

    },
    NavPlaceText: {
        fontSize: 15,
        fontWeight: "400",
    },
    PlaceContainer: {
        top: 5,
        flexDirection: "row",
        marginLeft: 20
    },
    NavUser: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    ModalContainer: {
        backgroundColor: "rgba(0,0,0,0.7)",
        padding: 10,
        flex: 1
    },
    ModalSubContainer: {
        height: 550,
        width: 350,
        backgroundColor: "white",
        marginTop: 100,
        borderRadius: 20,
        alignSelf: "center",
    },
    SelectCountryTitle: {
        borderBottomWidth: 0.6,
        height: 70,
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    CountryTitleText: {
        fontSize: 30,
        fontWeight: "500"
    },
    Dropdown: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        margin: 20
    },
    CityContainer: {

        margin: 10,
        width: 120,
        height: 45,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "white",
        elevation: 10,
        shadowColor: '#52006A',
    },



})
export default Navbar;