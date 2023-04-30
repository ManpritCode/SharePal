import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import react from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native"
import { SliderBox } from "react-native-image-slider-box";

export default function ImageCrousel() {
    const images = [
        require('../../Images/camera.png'),
        require('../../Images/gaming.png'),
        require('../../Images/Man.png'),
    ];
    return (
        <View style={Styles.CrouselContainer}>
            <ImageBackground source={require('../../Images/background1.png')} style={{
                flex: 1,
                resizeMode: "cover",
                justifyContent: 'center', 
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
                <View style={Styles.Maincontainer}>
                    <Text style={Styles.Text1}>Your search for the best rental in Raipur ends here!</Text>
                </View>
                <TouchableOpacity style={Styles.TextContainer}>
                    <Text style={Styles.Text2}>
                        Get Started!
                    </Text>
                </TouchableOpacity>
                <View style={Styles.imagecrousel}>
                        <SliderBox images={images}
                            imageLoadingColor="rgba(0,0,0,0)"
                            firstItem={0}
                            autoplay={true}
                            autoplayInterval={2000}
                            circleLoop={true}
                            dotColor="blue"
                             style={{
                                height: 320,
                                width:250,
                                alignItems:"center",
                                justifyContent:"center",
                                alignSelf:"center",
                                marginTop:20
                            }}
                        />
                </View>
            </ImageBackground>
        </View>
    )
}

const Styles = StyleSheet.create({
    CrouselContainer: {
        backgroundColor: "green",
        width: "100%",
        height: 500,
        
        alignSelf: "center"
    },
    Maincontainer: {
        width: 300,

    },
    TextContainer: {
        height: 35,
        width: 100,
        backgroundColor: "blue",
        borderRadius: 10,
        justifyContent: 'center',
        top: -10
    },
    Text1: {
        fontSize: 25,
        textAlign: "center",
        lineHeight: 30,
        fontWeight: "400"

    },
    Text2: {
        fontSize: 15,
        color: "white",
        textAlign: "center",
        padding: 5
    },
    imagecrousel: {
        height: 300,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
})