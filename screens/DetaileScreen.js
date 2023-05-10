import { ScrollView, View } from "react-native";
import Navbar from "../src/HomeScreenComponents/Navbar";
import AboutSharepal from "../src/DetaileScreenComponents/AboutSharepal";
import TrekkingGearOnRent from "../src/DetaileScreenComponents/TrekkingGearOnRent";
import { Dimensions } from 'react-native';
import BottomNavigation from "../src/HomeScreenComponents/BottomNavigation";
import Paragraph from "../src/HomeScreenComponents/paragraph";
import BottomSection from "../src/HomeScreenComponents/BottomSection";
import Buttons from "../src/DetaileScreenComponents/buttons";
export default function DetaileScreen(){
    const windowWidth = Dimensions.get('window').width;


    return(
        <>
        <View style={{width:windowWidth,height:"100%"}}>
        <Navbar/>
        <ScrollView >
        <AboutSharepal/>
        <TrekkingGearOnRent/>
        <Paragraph/>
        <BottomSection/>
       
        </ScrollView>
        <Buttons/>
        <BottomNavigation/>
       
        </View>
        </>
    )
}