import { View,Text } from "react-native";
import { TouchableOpacity,StyleSheet,Image} from 'react-native';
export default function Buttons(){
    return(
        <View style={styles.poisonBtn}>
           <TouchableOpacity>
            <Image style={styles.Image} source={require("../../Images/itemcontainer/cart.png")}></Image>
</TouchableOpacity>
<TouchableOpacity>
            <Image style={styles.Image} source={require("../../Images/itemcontainer/wats.png")}></Image>
</TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    maincontainer:{
height:100,
width:100,
borderWidth:1
    },
    poisonBtn: {
      position: 'absolute',
      bottom: 50, // adjust as needed
      right: 20, // adjust as needed
      zIndex: 999, // adjust as needed
    },
    Image:{
        borderRadius:50,
        height:50,
        width:50,
        marginVertical:10
    }
  });