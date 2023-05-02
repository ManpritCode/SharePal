
import { height, width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Review() {
    const items = [
        {
            dpimage: require("../../Images/Review/AA.png"),
            name: "Amal",
            location: "BAngalore",
            catogories: "Gaming Console",
            itemtittle: "Affaordable products",
            star: '⭐️⭐️⭐️⭐️⭐️',
            Disscription: "I am a regular customer and order ps4 It’s very affordable and booking an order is super easy and user friendly website and polite staff."
        },
        {
            dpimage: require("../../Images/Review/AS.png"),
            name: "Afarana",
            location: "Bangalore",
            catogories: "Gaming Console",
            itemtittle: "Gaming Console",
            star: '⭐️⭐️⭐️⭐️⭐️',
            Disscription: "Have used their services twice now. They never disappoint. Quick responses, polite, transparent, hassle free, great products as well. Rented trekking gear and PS4. Thanks Sharepal! Cheers to you guys!"
        },
        {
            dpimage: require("../../Images/Review/js.png"),
            name: "Jayaraman",
            location: "Mumbai",
            catogories: "Riding Gear",
            itemtittle: "Amazing products",
            star: '⭐️⭐️⭐️⭐️⭐️',
            Disscription: "Great company amazing products at affordable prices and great service I would recommend share pal to everybody they really go out of the way for the best service I surely know I will be their forever customer."
        },
        {
            dpimage: require("../../Images/Review/kanthi.png"),
            name: "Kanthikiran",
            location: "Bangalore",
            catogories: "Riding Gear",
            itemtittle: "Quality products",
            star: '⭐️⭐️⭐️⭐️⭐️',
            Disscription: "It’s an amazing service, starting from the quality of the gear provided to the pickup and drop at doorstep facility. The staff is extremely helpful and supportive. The jacket was freshly washed and the shoes provided were brand new. The refund for the deposit was also processed immediately. We had no clue that this kind of service existed in India, SharePal."
        },
        {
            dpimage: require("../../Images/Review/SB.png"),
            name: "Satyaki ",
            location: "Kolkata",
            catogories: "Trekking Gear",
            itemtittle: "Trustworthy Trekking Rentals",
            star: '⭐️⭐️⭐️⭐️⭐️',
            Disscription: "I would recommend SharePal for anybody looking to rent trekking gears, on time delivery, condition of products delivered were very good, super transparent deposit return policy."
        },
        {
            dpimage: require("../../Images/Review/RS.png"),
            name: "Rakesh",
            location: "Mumbai",
            catogories: "Trekking Gear",
            itemtittle: "Quick Refund",
            star: '⭐️⭐️⭐️⭐️⭐️',
            Disscription: "Ordered 2 pair of shoes & 3 trekking poles. Shoes were in mint condition, very well cleaned and sanitized and so does the trekking poles. Delivery and pick-up was smooth. Refund was done within the time frame. If you have UPI it will be transferred immediately. I overall had a very good experience with Sharepal. Have recommended to my family and friends as well. Thank you Sharepal."
        },
        {
            dpimage: require("../../Images/Review/SB.png"),
            name: "Satyaki ",
            location: "Kolkata",
            catogories: "Trekking Gear",
            itemtittle: "Trustworthy Trekking Rentals",
            star: '⭐️⭐️⭐️⭐️⭐️',
            Disscription: "I would recommend SharePal for anybody looking to rent trekking gears, on time delivery, condition of products delivered were very good, super transparent deposit return policy."
        },
        {
            dpimage: require("../../Images/Review/AA.png"),
            name: "Amal",
            location: "BAngalore",
            catogories: "Gaming Console",
            itemtittle: "Affaordable products",
            star: '⭐️⭐️⭐️⭐️⭐️',
            Disscription: "I am a regular customer and order ps4 It’s very affordable and booking an order is super easy and user friendly website and polite staff."
        },
        {
            dpimage: require("../../Images/Review/SB.png"),
            name: "Satyaki ",
            location: "Kolkata",
            catogories: "Trekking Gear",
            itemtittle: "Trustworthy Trekking Rentals",
            star: '⭐️⭐️⭐️⭐️⭐️',
            Disscription: "I would recommend SharePal for anybody looking to rent trekking gears, on time delivery, condition of products delivered were very good, super transparent deposit return policy."
        },

    ]
    return (
        <View style={Styles.maincontainer}>

            <View style={Styles.textcontainer}>
                <Text style={{ fontSize: 23, textAlign: "center", fontWeight: "500" }}>More than 50k Happy Customers!</Text>
            </View>
            <ScrollView horizontal={true}>

                {
                    items.map((item, index) => (
                        <View key={index} style={Styles.subcontainer}>
                            <View style={{}}>
                                <View style={Styles.Uppercontainer}>
                                    <View style={Styles.dpcontainer}>
                                        <Image source={item.dpimage} style={Styles.Image}></Image>
                                    </View>
                                    <View style={Styles.locationContainer}>
                                        <Text>{item.name}  , {item.location}</Text>
                                        <Text style={{lineHeight:30,color:"grey",fontWeight:'400',color:"blue"}}>{item.catogories}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                
                                height: 50,
                                width: "80%",
                                alignSelf: "center"
                            }}>
                                <Text style={{fontWeight:"400",fontSize:15}}>{item.itemtittle}</Text>
                                <Text style={{fontSize:20,lineHeight:30}}>{item.star}</Text>
                            </View>
                            <View style={{
                                height: 200,
                                width: "90%",
                        
                                marginVertical:10,
                                alignSelf: "center"
                            }}>
                                <Text style={{ lineHeight: 20, textAlign: "justify" ,color:"grey",fontSize:13}}>{item.Disscription}</Text>

                            </View>
                        </View>

                    ))
                }

            </ScrollView>



        </View>
    )
}
const Styles = StyleSheet.create({
    maincontainer: {
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        flex: 1,
        height: 460
    },
    textcontainer: {
        width: 300,

        
        alignItems: "center",
        justifyContent: "center",

    },
    scroll: {




    },
    subcontainer: {
        flex: 1,
        height: 380,
        width: 350,
        marginHorizontal: 10,
        backgroundColor: "white",
        justifyContent: "center",
        top: 10,
borderWidth:2,
borderColor:"lightgrey",
        elevation: 9,
        shadowColor: '#52006A',
        borderRadius: 20
    },
    Uppercontainer: {
       
        height: 100,
        width: "90%",
        flexDirection: "row",
        alignSelf: "center",
        justifyContent:"center"
    },
    dpcontainer: {
        
        justifyContent:"center", 
        alignItems:"center",
        marginHorizontal:10
    },
    Image: {
        resizeMode: "cover",
        height: 70,
         width: 70,
         alignSelf:"center",
         borderWidth:2,
         borderColor:"blue",
         borderRadius:40

    },
    locationContainer: {
        flex: 1,
        justifyContent:"center",
        marginHorizontal:10,
    }
})