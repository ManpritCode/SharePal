

import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Image ,Text,ScrollView,TouchableOpacity} from 'react-native';



export default function Tester(){
  const [visible,setvisble] =useState(true)
   
  function readmore(){
    setvisble(true)
  }
  function readless(){
    setvisble(false)
  }

    return(
        <View style={{marginTop:100}}>
      {
       visible ? (<View style={{
        
       }}> 

        <TouchableOpacity on onPress={readless}>
         <Text>MAnpreet</Text>
         </TouchableOpacity>
        </View>) :(<View>
            <TouchableOpacity onPress={readmore}>
            <Text>Singh</Text>
            </TouchableOpacity>
        </View>)
      }
      </View>
    )
}


