import React from "react";
import Navbar from "../src/HomeScreenComponents/Navbar";
import { SafeAreaView, ScrollView } from "react-native";
import { View, Text } from "react-native";
import Tester from "../src/HomeScreenComponents/Tester";
import ImageCrousel from "../src/HomeScreenComponents/ImageCrousel";
import ItemsCategories from "../src/HomeScreenComponents/ItemsCategories";
import CameraItems from "../src/HomeScreenComponents/Cameraitems";
// import TreckingGear from "../src/HomeScreenComponents/TreckkingGear";
import Gaming_Console from "../src/HomeScreenComponents/Gaming-console";
import RidingGear from "../src/HomeScreenComponents/RidingGear";
import Ps5gaming from "../src/HomeScreenComponents/Ps5gaming";
import WinterWear from "../src/HomeScreenComponents/Winterwear";
import WhySharePal from "../src/HomeScreenComponents/WhySharePal";
import Review from "../src/HomeScreenComponents/Review";
import Paragraph from "../src/HomeScreenComponents/paragraph";
import BottomSection from "../src/HomeScreenComponents/BottomSection";
import BottomNavigation from "../src/HomeScreenComponents/BottomNavigation";
import { Dimensions } from 'react-native';
import { StatusBar } from "expo-status-bar";
export default function HomeScreen() {
  const windowWidth = Dimensions.get('window').width;

  return (
    <>
      <StatusBar></StatusBar>
      <View style={{ height: "100%", width: windowWidth, }}>
        <Navbar />
        <ScrollView>
          <ImageCrousel />
          <ItemsCategories />
          <Gaming_Console />
          <CameraItems />
          <RidingGear />
          <Ps5gaming />
          <WinterWear />
          <WhySharePal />
          <Review />
          <Paragraph />
          <BottomSection />
        </ScrollView>
        <BottomNavigation />
      </View>
    </>

  )
}