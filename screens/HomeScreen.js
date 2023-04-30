import React from "react";
import Navbar from "../src/HomeScreenComponents/Navbar";
import { SafeAreaView, ScrollView } from "react-native";
import { View ,Text} from "react-native";
import Tester from "../src/HomeScreenComponents/Tester";
import ImageCrousel from "../src/HomeScreenComponents/ImageCrousel";
import ItemsCategories from "../src/HomeScreenComponents/ItemsCategories";
import CameraItems from "../src/HomeScreenComponents/Cameraitems";
import TreckingGear from "../src/HomeScreenComponents/TreckkingGear";
import Gaming_Console from "../src/HomeScreenComponents/Gaming-console";

export default function HomeScreen(){

    return(
     <SafeAreaView>
         <ScrollView>
         <Navbar/>
       
       
            <ImageCrousel/>
      <ItemsCategories/>
      <TreckingGear/>
      <Gaming_Console/>
      <CameraItems/>
        {/* <Tester/>  */}
        </ScrollView>
        </SafeAreaView>
        
        
    )
}